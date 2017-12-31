import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import Walkthrough from '../components/Signup/Walkthrough';

// Takes the top level items in the reducers, prepares 
// them to pass down as props to the "connected" component
// Should only pass down the parts of state you need, but
// for now we are passing everything down
const mapStateToProps = (state) => {
  console.log('Mapping state to props in WalkthroughContainer:', state);
  return state
}

// Takes the actions, makes them available as individual
// props passed down to the "connected" component
const mapDispatchToProps = (dispatch) => {
  console.log('Actions in WalkthroughContainer', actionCreators);
  return bindActionCreators(actionCreators, dispatch);
}

const WalkthroughContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Walkthrough));

export default WalkthroughContainer;