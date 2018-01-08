import { message } from 'antd';
import axios from 'axios';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Connect from './Connect';
import Account from './Account/Account';
import Footer from './Home/Footer';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Nav from './Nav/NavHome';
import NavWhite from './Nav/NavWhite';
import Admin from './Admin/Admin';
import SubmitVideo from './SubmitVideo/SubmitVideo';
import Walkthrough from './Signup/Walkthrough';
import '../css/style.css';

class App extends React.Component {

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  APP FUNCTIONS
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  componentDidMount() { // load initial seed data to queue
    // axios.get('api/saveInitialData')
    // .then((response) => {
    //   console.log('Initial data saved successfully', response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
  }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Renders the components based ot the current state
* * * * * * * * * * * * * * * * * * * * * * * * * * */


  render() {

    /* Add conditional statement to check if the authenticated is true or false*/
    /* Split route between isAuthenticated and not authenticated */
    /* Similar to a if statement, if authenticated then display the protected routes */

    return (
      <div className="App">
        <nav className='navbg'>
          <Switch>
            <Route exact path="/" component={ Nav } />
            <Route path="/" component={ NavWhite } />
          </Switch>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Signup } />
            <Route path="/myaccount" component={ Account } />
            <Route path="/walkthrough" component={ Walkthrough } />
            <Route path="/admin" component={ Admin } />
            <Route path="/submitvideo" component={ SubmitVideo } />
            <Route path="/dashboard/:category?" component={ Dashboard } />
          </Switch>
        </main>
        <footer>
          <Route path="/" component={ Footer } />
        </footer>
      </div>
    )
  }
}

export default Connect(App);

