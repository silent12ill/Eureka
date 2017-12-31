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
import './Account.css';
import axios from 'axios';
//import setPlaylistVideos from '.../actions';

//
//send bookmarks data into bookmarks component
//send categories from main store
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


  getTotalCategories() {
    axios.get('/api/getCategories', {})
    .then((response)=>{
      console.log('Received Categories');
      console.log(response.data);
      dispatch(setPlaylistVideos(response.data));
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  componentDidMount() {
    console.log('ACCOUNT PROPS:', this.props);
    this.getTotalCategories(); //updates the global redux store
  }

  render() {
		return (
		  <div className="accountTitle">
        <h4>Welcome {fakeUserInfo.userName}!</h4>
        <AccountInfo user={fakeUserInfo.userName} />
        <AccountBookmarks bookmarks={fakeUserInfo.fakeUserBookmarks}/>
        <AccountCategories
          userCategories={fakeUserInfo.fakeUserCats}
          allCategories={fakeCats.fakeTotalCats}/>
		  </div>
		)
  }
}

const mapStateToProps = (state) => {
  return {
    bookmarkedVideos: state.bookmarkedVideos,
    currentUser: state.currentUser,
    totalCategories: state.totalCategories
  }
}

export default connect(mapStateToProps)(Account);
