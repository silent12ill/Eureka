import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import Walkthrough from '../components/Signup/Walkthrough';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const WalkthroughContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Walkthrough));

export default WalkthroughContainer;