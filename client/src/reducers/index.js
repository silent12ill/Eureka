/*

  Everytime you add a new reducer,  you will need to:
  - import it here
  - add it to the call to `combineReducers`
  - create actions to handle it

*/

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import authStatus from './authReducer';
import bookmarkedVideos from './bookmarkedVideos';
import categoryVideos from './categoryVideos';
import currentPage from './currentPage';
import currentPlaylist from './currentPlaylist';
import currentVideo from './currentVideo';
import mindfeedVideos from './mindfeedVideos';
import recentVideos from './recentVideos';
import topVideos from './topVideos';
import userCategories from './userCategories';
import videoCache from './videoCache';
import userPreferences from './userPreferencesReducer';


const rootReducer = combineReducers({
  router: routerReducer,
  authStatus,
  bookmarkedVideos,
  categoryVideos,
  currentPage,
  currentPlaylist,
  currentVideo,
  mindfeedVideos,
  recentVideos,
  topVideos,
  userCategories,
  videoCache,
  userPreferences

});

export default rootReducer;