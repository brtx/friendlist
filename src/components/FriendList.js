import React, { Component } from 'react';
import FriendListItem from './FriendListItem';

export default class FriendList extends Component {
	constructor(props) {
    	super(props);
  	}
  
	render () {
		let friendsById = this.props.friends.friendsById; 
		let friendsMap = Object.keys(friendsById).map((k) => friendsById[k]);		
		let friendListItems = friendsMap.map((f) => <FriendListItem name={f.name} />); 
		
		return (<ul>
					{friendListItems}
			    </ul>)		  
	};
}