import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app')
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';

ReactDOM.render(
  <Provider store={ store }>
    <Main />
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






// //stores the history?
// import createHistory from 'history/createBrowserHistory';

// //Route is pretty self explanatory
// import { Route } from 'react-router';

// //special redux and router components needed
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


//   <div className="primary-layout">
//      <main>
//       <Route path="/" exact component={App} />
//       <Route path="/dashboard" component={TopicDashboard} />
//       <Route path="/myaccount" component={AccountDashboard} />
//       <Route path="/login" component={Login} />
//     </main>
//   </div>
// )


// ReactDOM.render(

//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <App />
//       </ConnectedRouter>
//     </Provider>
//   , document.getElementById('app'));
// =======
// render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ), document.getElementById('app'));

