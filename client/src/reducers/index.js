/*

  Everytime you add a new reducer,  you will need to:
  - import it here
  - add it to the call to `combineReducers`
  - create actions to handle it

*/

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import authStatus from './authReducer';
import categoryVideos from './categoryVideos';
import currentPlaylist from './currentPlaylist';
import currentVideo from './currentVideo';
import mindfeedVideos from './mindfeedVideos';
import recentVideos from './recentVideos';
import topVideos from './topVideos';
import videoCache from './videoCache';
import userInfo from './userInfo';


const rootReducer = combineReducers({
  router: routerReducer,
  authStatus,
  categoryVideos,
  currentPlaylist,
  currentVideo,
  mindfeedVideos,
  recentVideos,
  topVideos,
  userInfo,
  videoCache
});

export default rootReducer;
