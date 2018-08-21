import * as React from 'react';
import { connect } from 'react-redux';

class HomeScreen extends React.Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div></div>);
  }
}

export default connect()(HomeScreen);