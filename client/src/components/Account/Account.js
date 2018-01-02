import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Menu, Icon, Row, Col } from 'antd';
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

const fakeUserInfo = {
    userName: 'hello@world',
    fakeUserCats: ['catA', 'catB', 'catC'],
    fakeUserBookmarks: ['vidA', 'vidB', 'vidC']
};

const fakeCats = {
    fakeTotalCats: ['catD', 'catE', 'catF']
}

class Account extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      totalCategories: [],
      toBeUpdatedCategories: {},
      categories: [],
      email: this.props.authStatus.currentUser
		};
	}

  componentDidMount() {
    console.log('ACCOUNT PROPS:', this.props);
    this.getTotalCategories();
    console.log(this.state)
  }

  getTotalCategories() {
    axios.get('/api/getCategories', {})
    .then((response) => {
      console.log('Received Categories',response.data);
      var categories = Object.keys(response.data);
      console.log('Categories', categories);
      this.setState({totalCategories: response.data,
                     categories: categories });
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
    console.log(category);
  }

  sendUpdatedCategories(user){

    //axios.post()
  }


  render() {
		return (
      <div className="accountTitle">

        <Tabs defaultActiveKey="1" onChange={cb}>
          <TabPane tab="AccountInfo" key="1">
            <AccountInfo user={fakeUserInfo.userName} />
          </TabPane>

          <TabPane tab="AccountCategories" key="2">
            <AccountCategories
              userCategories={fakeUserInfo.fakeUserCats}
              allCategories={fakeCats.fakeTotalCats}
              categoriesObject={this.state.totalCategories}
              categoriesKeys={this.state.categories}
              clicked={this.handleClickCategories.bind(this)}
              />
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
