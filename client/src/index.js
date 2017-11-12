import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import App from './components/App';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


// const PrimaryLayout = () => (



//   <div className="primary-layout">
//      <main>
//       <Route path="/" exact component={App} />
//       <Route path="/dashboard" component={TopicDashboard} />
//       <Route path="/myaccount" component={AccountDashboard} />
//       <Route path="/login" component={Login} />
//     </main>
//   </div>
// )


// const ToBeRendered = () => (
//   <LocaleProvider locale={enUS}>
//     <BrowserRouter>
//       <PrimaryLayout />
//     </BrowserRouter>
//   </LocaleProvider>

// )

ReactDOM.render(<App />, document.getElementById('app'))
