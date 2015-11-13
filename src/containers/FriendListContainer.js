import { connect } from 'react-redux';  
import FriendListApp from '../components/FriendListApp';

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    friendlist: state.friends 
  }
}

export default connect(
  mapStateToProps
)(FriendListApp)