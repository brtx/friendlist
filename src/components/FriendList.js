import React, { Component } from 'react';

export default class FriendList extends Component {
	static propTypes = {
		friends: React.PropTypes.object.isRequired
	}
  
	constructor(props) {
    	super(props);
  	}
  
	render () {
		var friendsById = this.props.friends.friendsById; 
		var friendsMap = Object.keys(friendsById).map((k) => friendsById[k]);		
		var friendListItems = friendsMap.map((f) => <li>{f.name}</li>); 
		
		return (<ul>{friendListItems}</ul>)		  
	};
}