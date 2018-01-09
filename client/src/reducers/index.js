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
import userBookmarks from './userBookmarksReducer';


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
  userPreferences,
  userBookmarks
});

export default rootReducer;



/*

  ----------------------------------
  1) Refactoring the `state` object
     in App.js to reducers.
  ----------------------------------

  Some of the items in `state` have been nested for logical
  grouping into reducers. Each top level item can be considered
  a reducer.


  ----------------------------------
  2) Previous State Object
  ----------------------------------
=======
  videoCache,
  userPreferences
>>>>>>> 921725693fe9bdac6d2ddcb7c47c40dcf1a31867

});

export default rootReducer; */