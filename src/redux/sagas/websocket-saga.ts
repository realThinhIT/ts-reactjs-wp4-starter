import * as wsConfig from '../../config/websocket';
import { eventChannel } from 'redux-saga';
import {
  fork,
  take,
  call,
  put,
  cancel,
  all,
  takeLatest,
  takeEvery
} from 'redux-saga/effects';
import ReconnectingWebSocket from 'reconnecting-websocket';

import * as authTypes from '../store/auth/auth.actions';

//////////////////////////////////////////////////////////////////////////
// WebSocket Initial
//////////////////////////////////////////////////////////////////////////
(window as any).wsSocket = null;

export function openWebSocket() {
  return new Promise((resolve) => {
    console.log('WS instance establishing...');
    const socket = new ReconnectingWebSocket(wsConfig.WEBSOCKET_SERVER_URL);

    try {
      socket.onopen = () => {
        console.log('WS instance established!');
        (window as any).wsSocket = socket;

        resolve(socket);
      };

      socket.onerror = () => {
        console.log('Could not connect to WS server!');
      };
    } catch (e) {
      console.log('There were some problems creating WS instance.', e);
    }
  });
}

function subscribe(socket) {
  return eventChannel(emit => {
    socket.onmessage = msg => {
      let message = null;
      try {
        try {
          message = JSON.parse(msg.data);
        } catch (e) {
          message = {};
          console.log('Error parsing websocket message.');
        }

        // On Message Listeners
        try {
          //
        } catch (e) {
          console.log(e);
        }
      } catch (e) {
        console.log('Error processing websocket messages.');
      }
    };

    return () => { /*...*/ };
  });
}

function* fetchData(socket) {
  const wsInstanceAction = yield call(subscribe, socket);

  while (true) {
    const emittedAction = yield take(wsInstanceAction);
    yield put(emittedAction); // dispatch action
  }
}

function* emitData(socket) {
  while (true) {
    // Action Listeners
    try {
      yield all([
        //
      ]);
    } catch (e) {
      console.log(e);
    }
  }
}

function* handlingWs(socket) {
  const taskFetch = yield fork(fetchData, socket);
  const taskEmit = yield fork(emitData, socket);

  function* runSagas() {
    yield all([
      taskFetch,
      taskEmit
    ]);
  }

  function* checkReconnect(taskFetch, taskEmit, socket, runSagas) {
    while (true) {
      yield take(`${authTypes.STORE_AUTH_RECONNECT_WS}`);
      console.log('Logging out');
      socket.close();
      yield cancel(taskFetch);
      yield cancel(taskEmit);
      socket = yield call(openWebSocket);
      taskFetch = yield fork(fetchData, socket);
      taskEmit = yield fork(emitData, socket);
      yield runSagas();
    }
  }

  yield all([
    runSagas(),
    fork(checkReconnect, taskFetch, taskEmit, socket, runSagas)
  ]);
}

function* wsHandling() {
  const socket = yield call(openWebSocket);
  yield fork(handlingWs, socket);
  // const subscription = yield fork(handlingWs, socket);
}

export default function* rootSaga() {
  yield fork(wsHandling);
}

export const checkWsConnected = () => {
  return (window as any).wsSocket;
};
