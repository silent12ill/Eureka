import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunk];

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
  // Add combined reducers to store
  rootReducer,

  // Enable browser extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  // Add redux-thunk and logger
  applyMiddleware(...middlewares)
);

export default store;