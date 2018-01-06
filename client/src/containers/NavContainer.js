import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import NavHome from '../components/Nav/NavHome';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const NavContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavHome));

export default NavContainer;