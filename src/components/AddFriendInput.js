import React, { Component } from 'react';
let ReactDOM = require('react-dom');

export default class AddFriendInput extends Component {
	constructor(props) {
    	super(props);
  	}
  
	  onClick(e) {
		  e.preventDefault();
      	  let name = this.refs.name.value;
		  this.props.addFriend(name);
	  }
	
	  render () {
		  return (
		  <div>
		  	New Friend: 
			<input type="text" ref="name" />
		    <button onClick={this.onClick.bind(this)}>Add</button>
		  </div>)
	  };
}