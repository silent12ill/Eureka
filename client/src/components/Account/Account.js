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
import { connect } from 'react-redux';

//
//send bookmarks data into bookmarks component
//send categories from main store
//
//

const fakeUserInfo = {
    userName: 'hello@world',
    fakeUserCats: ['catA', 'catB', 'catC'],
    fakeUserBookmarks: ['vidA', 'vidB', 'vidC']
};
const fakeCats = {
    fakeTotalCats: ['catD', 'catE', 'catF']
}

class Account extends React.Component {
	constructor() {
		super();
		this.state = {
      //state here
		};
	}

  componentDidMount() {
    console.log('ACCOUNT PROPS:', this.props);
  }

  render() {
		return (
		  <div>
        <h4>Welcome {this.props.currentUser}!</h4>
        <AccountInfo info={fakeUserInfo}/>
        <AccountBookmarks bookmarks={fakeUserInfo}/>
        <AccountCategories totalCategories={fakeCats} userCategories={fakeUserInfo}/>
		  </div>
		)
  }
}

const mapStateToProps = (state) => {
  return {
    bookmarkedVideos: state.bookmarkedVideos,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Account);
