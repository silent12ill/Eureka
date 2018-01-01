import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import Account from '../components/Accont/Account';

const mapStateToProps = (state) => {
  console.log('Mapping state to props in AccountContainer:', state);
  return state
}

// Takes the actions, makes them available as individual
// props passed down to the "connected" component
const mapDispatchToProps = (dispatch) => {
  console.log('Actions in AccountContainer', actionCreators);
  return bindActionCreators(actionCreators, dispatch);
}

const AccountContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));

export default AccountContainer;