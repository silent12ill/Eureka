import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import SubmitVideo from '../components/SubmitVideo/SubmitVideo';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const SubmitVideoContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SubmitVideo));

export default SubmitVideoContainer;