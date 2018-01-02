import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Tabs } from 'antd';

import AccountBookmarks from './AccountBookmarks';
import AccountCategories from './AccountCategories';
import AccountInfo from './AccountInfo';
import { connect } from 'react-redux';
import './Account.css';
import axios from 'axios';

const TabPane = Tabs.TabPane;



function cb(key) {
  console.log(key);
}

//import store from '../store.js';

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
      totalCategories: {},
      toBeUpdatedCategories: {},
      userCategories: {}
		};
	}


  getTotalCategories() {
    axios.get('/api/getCategories', {})
    .then((response) => {
      console.log('Received Categories');
      // console.log(response.data);
      this.setState({totalCategories: response.data});
      console.log(this.state);
      //store.dispatch(setPlaylistVideos(response.data));
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  getUserCategories() {
    axios.get('/api/getCatSubCatData', {})
    .then((response)=>{
      console.log('Successfull Get Cat/SubCat request');
      this.setState({})
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  handleClickCategories(category){
    this.setState()
  }

  sendUpdatedCategories(){

  }

  componentDidMount() {
    console.log('ACCOUNT PROPS:', this.props);
    this.getTotalCategories(); //updates the global redux store
  }

  render() {
		return (
      <div className="accountTitle">

        <Tabs defaultActiveKey="1" onChange={cb}>
          <TabPane tab="AccountInfo" key="1">
            <AccountInfo user={fakeUserInfo.userName} />
          </TabPane>
          <TabPane tab="AccountBookmarks" key="2">
            <AccountBookmarks bookmarks={fakeUserInfo.fakeUserBookmarks}/></TabPane>
          <TabPane tab="AccountCategories" key="3">
            <AccountCategories
              userCategories={fakeUserInfo.fakeUserCats}
              allCategories={fakeCats.fakeTotalCats}
              stateCategories={this.state.totalCategories}/>
          </TabPane>
        </Tabs>
      </div>
		)
  }
}

// const mapStateToProps = (state) => {
//   return {
//     bookmarkedVideos: state.bookmarkedVideos,
//     currentUser: state.currentUser,
//     totalCategories: state.totalCategories
//   }
// }

export default Account;
