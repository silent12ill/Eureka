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
import AccountCategories from './Account/AccountCategories';
import '../css/style.css';

class App extends React.Component {

  componentDidMount() { 
  }

  render() {
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
            <Route path="/dashboard/:category?" component={ Dashboard } />
            { this.props.authStatus.loggedIn ? (<Route path="/myaccount" component={ Account } />) : (<Route path="/myaccount" component={ Login } />) }
            { this.props.authStatus.loggedIn ? (<Route path="/accountCategories" component={ AccountCategories } />) : (<Route path="/accountCategories" component={ Login } />) }
            { this.props.authStatus.loggedin ? (<Route path="/submitvideo" component={ SubmitVideo } />) : (<Route path="/submitvideo" component={ Login } />) }
            { this.props.authStatus.currentUser === 'admin@mindfeed.com' ? (<Route path="/admin" component={ Admin } />) : (<Route path="/admin" component={ Login } />) }
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

