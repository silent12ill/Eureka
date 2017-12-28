import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import Home from '../components/Home/Home';

// Takes the top level items in the reducers, prepares 
// them to pass down as props to the "connected" component
// Should only pass down the parts of state you need, but
// for now we are passing everything down
const mapStateToProps = (state) => {
  console.log('Mapping state to props in HomeContainer:', state);
  return state
}

// Takes the actions, makes them available as individual
// props passed down to the "connected" component
const mapDispatchToProps = (dispatch) => {
  console.log('Actions in HomeContainer', actionCreators);
  return bindActionCreators(actionCreators, dispatch);
}

const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

export default HomeContainer;