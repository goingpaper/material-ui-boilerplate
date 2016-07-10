import React, { Component } from 'react';
import MobileHeaderContainer from './MobileHeaderContainer';
import MobileFooterContainer from './MobileFooterContainer';
import Paper from 'material-ui/Paper';

var Navigation = React.createClass({
  render: function() {
    return (
      <Paper style={{margin:0}}>
        <MobileHeaderContainer/>
        {this.props.children}
        <MobileFooterContainer/>
      </Paper>
    );
  }
});
export default Navigation;
