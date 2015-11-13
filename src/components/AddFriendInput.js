import React, { Component } from 'react';
var ReactDOM = require('react-dom');

export default class AddFriendInput extends Component {
  static propTypes = {
      addFriend: React.PropTypes.func.isRequired
  }
  
	constructor(props) {
    	super(props);
    	this.state = {};
  	}
  
	  onClick(e) {
		  e.preventDefault();
		  console.log(this);
      let name = this.refs.name.value;
      console.log(name);
		  this.props.addFriend(name);
	  }
	
	  render () {
		  return (
		  <div>
		  	New Friend <input type="text" id="name" ref="name" /><button onClick={this.onClick.bind(this)}>Add</button>
		  </div>
		  )
	  };
}