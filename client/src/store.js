import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';

const history = createBrowserHistory();
const routerMiddlewareHistory = routerMiddleware(history);
const middlewares = [thunk, routerMiddlewareHistory];
const defaultState = {
  currentPage: 'home',
  topVideos: [],
  currentPlaylist: {
    videos: [],
    currentVideo: {},
    counter: 0
  },
  recentVideos: [],
  bookmarkedVideos: [],
  // Commented out to prevent console warnings.
  // Turn back on as necessary for development.
  //
  // authStatus: {
  //   loggedIn: false,
  //   currentUser: 'guest',
  // },
  // currentCategory: null
};

if (process.env.NODE_ENV !== 'production') {
// Enables logging of all Redux state changes.
// Very helpful for figuring out where an action is buggy,
// but also clogs up the console. To turn it off, just
// comment out the line below.
  middlewares.push(createLogger());
}

// Create store makes the store, combining all the reducers
// into a single object. We then turn on the Redux browser
// extension if it exists and apply Redux middleware
// (redux-thunk and logger)

const store = createStore(
  // Add all reducers
  rootReducer,
  // Initial empty values to define state
  defaultState,
  // bundle middlewares
  compose(
    // Add redux-thunk and logger
    applyMiddleware(...middlewares),
    // Enable browser extension, must be last
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default store;