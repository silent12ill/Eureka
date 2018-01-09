import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import store from './store';
import App from './components/App';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

/*

  1) `store` takes all of the reducers and sets up middleware

  2) `Provider` prepares the store for the `Main` component

  3) `App` is a connected component that takes the actions and 
  reducers and wires them up to the underlying component

  4) All reducers and actions are now available in `App` on `this.props`

*/
