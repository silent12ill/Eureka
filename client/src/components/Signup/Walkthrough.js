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
  constructor() {
    super();
    this.state = {
      allCatandSub: [], //get request for a list of all categories, with subcategories as a key?
      allCategories: [],

      email: null,//email address;
      preferences: {};
      
      selectedCategories: [],
      selectedSubcategories: [],

      clickedCategory: false,
      subcategories: []

    };

  this.handleAddCategory = this.handleAddCategory.bind(this);
  this.handleAddSubcategory = this.handleAddSubcategory.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.getAllCategories = this.getAllCategories.bind(this);
  this.handleClickCategory = this.handleClickCategory.bind(this);

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

  // handleAddCategory(value) {
  //   let selectedCategories = this.state.categories;
  //   currentCateories.push(value);
  //   this.setState({categories: currentCategories});
  // }

  handleAddSubcategory(value) {
    let currentSubcategories = this.state.subcategories;
    currentSubcateories.push(value);
    this.setState({subcategories: currentSubcategories});
  }

  handleClickCategory(category) {
    let subcategories = this.state.allCatandSub[category];
    console.log("All subcategories: ", subcategories)
    this.setState({clickedCategory: true, subcategories: subcategories});

    

  }
  
  displaySubcategories() {


  }



  render() {
    return (
      <div>
        <div className="walkthroughInner">
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
                  .map((subcategory) => <li><Subcategory key={subcategory} subcategoryName={subcategory} handleAddSubcategory={this.handleAddSubcategory}/></li>) }
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

}

export default Walkthrough;

                 // {this.state.allCategories
                 //  .map((category) => <li><Category categoryName={this.state.category} handleAddSubcategory={this.handleAddSubcategory}/></li>)}


                 //   {this.state.allCategories
                 //  .map((category) => <li><Subcategory subcategoryName={this.state.category[0]} handleAddCategory={this.handleAddCategory}/></li>)}



                  //                  <div> 
                  // {this.state.clickedCategory === true ? 
                  //     {subcategories
                  //     .map((subcategory) => <li><Subcategory key={subcategory} subcategoryName={subcategory} handleAddSubcategory={this.handleAddSubcategory}/></li>)}
                  // }
                  // <div>
