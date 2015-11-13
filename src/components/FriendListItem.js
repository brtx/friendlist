import React, { Component } from 'react';

export default class FriendListItem extends Component {
	static propTypes = {
		name: React.PropTypes.string.isRequired
	}
  
	constructor(props) {
    	super(props);
  	}
  
	render () {
		return (<li>{this.props.name}</li>)		  
	};
}