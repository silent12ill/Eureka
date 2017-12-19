import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Menu, Icon, Row, Col } from 'antd';
import '../../css/style.css';
import './signup.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import Category from './Category';
import Subcategory from './Subcategory';
import axios from 'axios';

class Walkthrough extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCatandSub: [], 
      allCategories: [],
      
      email: this.props.currentUser,
      preferences: {},

      clickedCategory: null,
      subcategories: []

    };

  this.getAllCategories = this.getAllCategories.bind(this);
  this.handleClickCategory = this.handleClickCategory.bind(this);
  this.handleClickSubcategory = this.handleClickSubcategory.bind(this);
  // this.submitPreferences = this.submitPreferences.bind(this);

  };

  componentDidMount() {
    this.getAllCategories();
  }

  getAllCategories() {
    axios.get('/api/getCategories')
    .then((response) => {
      let allCatandSub = response.data;
      let categories = Object.keys(allCatandSub);
      console.log("Only Cat: ", categories);
      console.log("All CatandSub:", allCatandSub);
      this.setState({allCatandSub: allCatandSub, allCategories: categories});
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleClickSubcategory(value) {
    let preferences = this.state.preferences;
    let clickedCategory = this.state.clickedCategory;
    if(!preferences[clickedCategory]) {
      preferences[clickedCategory] = [value];
    } else {
      preferences[clickedCategory].push(value);
    }
    this.setState({preferences: preferences});
  }

  handleClickCategory(category) {
    let subcategories = this.state.allCatandSub[category];
    this.setState({clickedCategory: category, subcategories: subcategories});
  }






  render() {
    return (
      <div>
        <div className="walkthroughInner">
        <h1>Get started by selecting categories that interest you!</h1>
          <Row>
            <Col span={6}>
              <div className="walkthroughCategories">
                <ul>
                 {this.state.allCategories
                  .map((category) => <li><Category key={category} categoryName={category} handleClickCategory={this.handleClickCategory} handleAddCategory={this.handleAddCategory}/></li>)}

                </ul>
              </div>
            </Col>

            <Col span={18}>
              <div className="walkthroughSubcategories">
                <ul> 
                  {this.state.clickedCategory && this.state.subcategories
                  .map((subcategory) => <li><Subcategory key={subcategory} subcategoryName={subcategory} handleClickSubcategory={this.handleClickSubcategory}/></li>) }
                </ul>
              </div>
            </Col>
          </Row>
          <button className="formButton walkthroughSubmit" onClick={() => this.props.submitMindfeedPreferences(this.state.email, this.state.preferences)}> Submit </button>
        </div>
      </div>
    )
  }

}

export default Walkthrough;
