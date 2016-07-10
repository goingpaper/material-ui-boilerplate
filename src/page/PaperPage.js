import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

var PaperPage = React.createClass({
	paperStyle: {
	  height: 1000,
	  width: '100%',
	  textAlign: 'center',
		color: 'red'
	},
  render: function() {
    return (
			<div>
	    	<Paper style={this.paperStyle} zDepth={1} />
	  	</div>
    );
  }
});
export default PaperPage;
