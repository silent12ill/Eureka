import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import Login from '../components/Login/Login';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const LoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

export default LoginContainer;