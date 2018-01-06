import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import Admin from '../components/Admin/Admin';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const AdminContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));

export default AdminContainer;