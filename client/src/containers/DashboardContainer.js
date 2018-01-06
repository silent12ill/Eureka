import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../actions';
import Dashboard from '../components/Dashboard/Dashboard';

const getCurrentPlaylist = (state) => {
  if (!state.currentPlaylist.length) {

  }
}

// Determine if we need the mindfeed list or the category list
// Add the video clicked to the beginning of that list and
// set as the current playlist and current video

// Try to use mindfeedPlaylist first, fall back to category
// Offset for adding a video to the beginning of the playlist
// props.updateVideoCounter(-1);
// 
// props.setCurrentVideo(topVideo);
// props.history.push("/dashboard");

// if (props.mindfeedVideos.length > 0) {
//   props.setPlaylistVideos(props.mindfeedVideos);
// } else {
//   props.getPlaylistByCategory(topVideo.category).then((res) => {
//   })
// }

// if mindfeed videos are queued, use mindfeed as playlist
// if mindfeed videos is empty, use category as playlist




// Takes the top level items in the reducers, prepares 
// them to pass down as props to the "connected" component
// Every time you have a new reducer you want to use, you
// will need to add it to the return values here.
const mapStateToProps = (state) => {
  console.log('Mapping state to props in DashboardContainer:', state);
  return state
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

const DashboardContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));

export default DashboardContainer;