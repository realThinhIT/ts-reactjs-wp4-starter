import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import wsSagaEffects from '../sagas/websocket-saga';
import authReducer from './auth/auth.reducer';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({
    auth: authReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(wsSagaEffects);
