import React from 'react';
import ReactDOM from 'react-dom';

var Index = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
export default Index;
