import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as FriendsActions from '../actions/FriendsActions';
import AddFriendInput from '../components/AddFriendInput';
import FriendList from '../components/FriendList';
const PropTypes = React.PropTypes;  

export default class FriendListApp extends Component {
  static propTypes = {
    friendlist: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {    
    const { friendlist, dispatch } = this.props;
    const actions = bindActionCreators(FriendsActions, dispatch);

    return (
      <div>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendlist}  />
      </div>
    );
  }
}