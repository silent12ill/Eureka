import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import SubmitVideo from '../components/SubmitVideo/SubmitVideo';

// Takes the top level items in the reducers, prepares 
// them to pass down as props to the "connected" component
// Should only pass down the parts of state you need, but
// for now we are passing everything down
const mapStateToProps = (state) => {
  console.log('Mapping state to props in SubmitVideoContainer:', state);
  return state
}

// Takes the actions, makes them available as individual
// props passed down to the "connected" component
const mapDispatchToProps = (dispatch) => {
  console.log('Actions in SubmitVideoContainer', actionCreators);
  return bindActionCreators(actionCreators, dispatch);
}

const SubmitVideoContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SubmitVideo));

export default SubmitVideoContainer;