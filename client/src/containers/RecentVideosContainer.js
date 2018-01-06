import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import RecentVideos from '../components/Dashboard/RecentVideos';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const RecentVideosContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(RecentVideos));

export default RecentVideosContainer;