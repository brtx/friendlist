/* src/containers/App.js */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';  
import { connect } from 'react-redux';

import AddFriendInput from '../components/AddFriendInput';
import FriendList from '../components/FriendList';
import * as FriendsActions from '../actions/FriendsActions';

class App extends Component {  
  render() {
    const { friendlist, dispatch } = this.props;
    
    // Turns an object whose values are action creators, into an object with the same keys, but 
    // with every action creator wrapped into a dispatch call so they may be invoked directly.
    const actions = bindActionCreators(FriendsActions, dispatch);

    return (
      <div>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendlist} />
      </div>
    );
  }
}

// Maps which part of the Redux global state our component wants to receive as props.
function mapStateToProps(state) {
  return {
    friendlist: state.friends 
  }
}

// Connects the React App container to the Redux store.
export default connect(mapStateToProps)(App);