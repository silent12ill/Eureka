import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home//Home'
import Dashboard from './Dashboard/Dashboard'
import SubmitVideo from './SubmitVideo/SubmitVideo'
import Login from './Login/Login'
import Signup from './Signup/Signup'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/submitvideo' component={SubmitVideo}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
    </Switch>
  </main>
)

export default Main;
