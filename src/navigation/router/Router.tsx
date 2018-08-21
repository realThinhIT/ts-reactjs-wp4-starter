import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import EntryContainerScreen from '../../containers/common/EntryContainerScreen/EntryContainerScreen';
import HomeScreen from '../../containers/home/HomeScreen/HomeScreen';

class AppRouter extends React.Component <{}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <EntryContainerScreen>
          <Route path="/" exact component={HomeScreen} />
        </EntryContainerScreen>
      </BrowserRouter>
    );
  }
}

export default connect()(AppRouter);