import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';

// Makes all the Redux state available as props
const mapStateToProps = (state) => state;

// Makes all the actions available as props
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

// Using `connect` takes the state and actions from Redux
// and injects them into the incoming component. This makes
// the actions and state available as props in the component.
export default function(component) {
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(component))
}