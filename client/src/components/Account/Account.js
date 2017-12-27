import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import AccountBookmarks from './AccountBookmarks';
import AccountCategories from './AccountCategories';
import AccountInfo from './AccountInfo';

class Account extends React.Component {
	constructor() {
		super();
		this.state = {
      //state here
		};
	}

  //functions here

  render() {
		return (
		  <div>
        <div className="visibleList">
          <ul>
            <li> <Link to="/AccountInfo"> Info </Link> </li>
            <li> <Link to="/AccountCategories"> Categories</Link> </li>
            <li> <Link to="/AccountBookmarks"> Bookmarks</Link> </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/AccountInfo" component={AccountInfo} />
          <Route path="/AccountCategories" component={AccountCategories} />
          <Route path="/AccountBookmarks" component={AccountBookmarks} />
        </Switch>

		  </div>
		)
  }
}

export default Account;
