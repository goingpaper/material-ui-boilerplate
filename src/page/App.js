import React from 'react';
import PaperPage from './PaperPage';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <List>
            <Subheader>Alexs item list</Subheader>
            <ListItem primaryText="Grappling hook" />
            <ListItem primaryText="Utility Belt" />
          </List>
          <List>
            <Subheader>Julias item list</Subheader>
            <ListItem primaryText="Coffee" />
            <ListItem primaryText="Coffee Vouchers" />
          </List>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <List>
            <Subheader>Brendans item list</Subheader>
            <ListItem primaryText="Ham and cheese" />
            <ListItem primaryText="Sausage roll" />
          </List>
        </div>

      </div>
    );
  }
});
export default App;
