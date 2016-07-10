// contains footer presentation
import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

var MobileFooter = React.createClass({
  render: function() {
    return (
      <Toolbar
      className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
      style={{'position': 'fixed', 'bottom': '0px', width: '100%'}}>
        <ToolbarGroup firstChild={true}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <FlatButton label="Default" />
            <FlatButton label="Default" />
            <FlatButton label="Default" />
            <FlatButton label="Default" />
            <FlatButton label="Default" />
            <FlatButton label="Default" />
          </div>

        </ToolbarGroup>
      </Toolbar>
    );
  }
});
export default MobileFooter;
