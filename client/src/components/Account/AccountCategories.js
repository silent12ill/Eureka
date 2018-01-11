import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Menu, Icon, Row, Col, Tabs, Select } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;
import '../../css/style.css';
import './account.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import Connect from '../Connect';
import SubcategoryCard from './SubcategoryCard';
import axios from 'axios';


class AccountCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCatandSub: [],
      allCategories: [],
      preferences: this.props.userInfo.userCategories || {},
      email: this.props.authStatus.currentUser || '',
      clickedCategory: null,
      subcategories: [],
      selectedSubcategories: []
    };

  };

  componentDidMount(props) {
    this.getAllCategories();
    const { userCategories } = this.props.userInfo;
    if (userCategories) {
      let userSubcategories = [];
      for (const category in userCategories) {
        userSubcategories = userSubcategories.concat(userCategories[category]);
      }
      this.setState({ selectedSubcategories: userSubcategories });
    }

  }

  getAllCategories = () => {
    axios.get('/api/getCategories')
    .then((response) => {
      let allCatandSub = response.data;
      let categories = Object.keys(allCatandSub);
      console.log("Only Cat: ", categories);
      console.log("All CatandSub:", allCatandSub);
      this.setState({allCatandSub: allCatandSub, allCategories: categories}, () => {
        this.handleClickCategory(this.state.allCategories[0]);
      });

    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleClickSubcategory = (subcategoryName) => {
    let clickedCategory = this.state.clickedCategory;
    let preferences = this.state.preferences;
    let selectedSubcategories = this.state.selectedSubcategories;

    const subcategoryIsCurrentlySelected = selectedSubcategories.includes(subcategoryName);

    //first check to see if category is already in preferences
    //if not, add it
    if (!preferences[clickedCategory]) {
      preferences[clickedCategory] = [];
    }

    // check to see if the subcategory is alredy in preferences
    if (subcategoryIsCurrentlySelected) {
      // If so, remove it from prefs
      preferences[clickedCategory] = preferences[clickedCategory].filter((sub) => sub !== subcategoryName);
      // Un-highlight it
      selectedSubcategories = selectedSubcategories.filter((sub) => sub !== subcategoryName);
    } else {
      // Add it to prefs for specific category
      preferences[clickedCategory].push(subcategoryName);
      // Highlight it
      selectedSubcategories.push(subcategoryName);
    }

    this.setState({
      preferences: preferences,
      selectedSubcategories: selectedSubcategories
    });
  }

  handleClickCategory = (category) => {
    let subcategories = this.state.allCatandSub[category];
    this.setState({clickedCategory: category, subcategories: subcategories});

  }

  submitMindfeedPreferences = (pref) => {
    console.log("Submitting the following:")
    let email = this.state.email;
    console.log('Email in fn: ', email);
    let preferences = pref;
    console.log('Preferences: ', pref);

    axios.get('/api/updateUserPreferences', {
      params: {
        email: email,
        preferences: preferences // {}
      }
    })
    .then((response) => {
      console.log("Preferences submitted", response);
      var videos = response.data;
      this.props.setUserCategories(preferences);
      // this.setMindfeedPlaylist(videos); 
      // navigate to dashboard
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {

    //this.handleClickCategory
    //this.handleClickSubcategory
    //this.state.allCategories
    //this.state.subcategories
    //this.submitMindfeedPreferences

    const allSelected = this.state.selectedSubcategories;

    return (
      <div className="categoriesContainer">
        <div className="categoriesInner">
        <h1>Get started by selecting categories that interest you!</h1>
          <div>
            <Tabs tabPosition="left" onTabClick={this.handleClickCategory}>
              {this.state.allCategories
                .map((category) =>
                  <TabPane tab={category} key={category} >
                  {this.state.subcategories
                    .map((subcategory) => <SubcategoryCard key={subcategory} subcategoryName={subcategory} allSelected={allSelected} handleClickSubcategory={this.handleClickSubcategory}/>
                  )}
                  </TabPane>
              )}
            </Tabs>
          </div>

          <button className="formButton categoriesSubmit" onClick={() => this.submitMindfeedPreferences(this.state.preferences)}> Submit </button>
        </div>
      </div>
    )
  }

}

export default Connect(AccountCategories);

