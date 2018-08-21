import * as React from 'react';
import store from './redux/store/index';
import { Provider } from 'react-redux';

import './assets/styles/App.scss';
import EntryContainerScreen from './containers/common/EntryContainerScreen/EntryContainerScreen';
import Router from './navigation/router/Router';

class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <EntryContainerScreen>
          <Router />
        </EntryContainerScreen>
      </Provider>
    );
  }
}

export default App;
