import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import NavWhite from '../components/Nav/NavWhite';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const NavWhiteContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavWhite));

export default NavWhiteContainer;