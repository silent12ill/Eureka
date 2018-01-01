import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import App from './App';


// Takes the top level items in the reducers, prepares 
// them to pass down as props to the "connected" component
// Every time you have a new reducer you want to use, you
// will need to add it to the return values here.
const mapStateToProps = (state) => {
  console.log('Mapping state to props:', state);
  return state;
}


// Takes the actions, makes them available as individual
// props passed down to the "connected" component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

// Using `connect` takes the state and actions from Redux,
// wires them up to the desired component, and returns a
// new component. 

// In this case, the target is the `App` component, which
// we want to inject the Redux behavior into. 

// The result of `connect` is assigned to the `Main`
// component. `Main` now behaves like a conduit that
// injects Redux state and props into the `App` component.

const Main = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default Main;