import * as React from 'react';
import { connect } from 'react-redux';

class EntryContainerScreen extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default connect()(EntryContainerScreen);