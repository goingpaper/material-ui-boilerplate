import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

var MobileHeader = React.createClass({
  render: function() {
    return (
      <AppBar
        title="What to Bring"
        iconElementRight={<FlatButton label="Menu" />}
        showMenuIconButton={true}
      />
    );
  }
});
export default MobileHeader;
