import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import store from './store';
import Main from './components/Main';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Main />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

/*

  1) `store` takes all of the reducers and sets up middleware

  2) `Provider` prepares the store for the `Main` component

  3) `Main` takes the actions and reducers and wires them
  up to the `App` component

  4) All reducers and actions are now available in `App` on `this.props`

*/
