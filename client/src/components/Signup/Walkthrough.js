import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Menu, Icon, Row, Col } from 'antd';
import '../../css/style.css';
import './signup.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Walkthrough extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategories: [], //get request for a list of all categories, with subcategories as a key?
      email: null,//email address;
      selectedCategories: [],
      selectedSubcategories: []

    };

  this.handleAddCategory = this.handleAddCategory.bind(this);
  this.handleAddSubcategory = this.handleAddSubcategory.bind(this);
  this.handleClick = this.handleClick.bind(this);

  };

  componentDidMount() {
    //get list of all categories/subcategories
  }

  handleAddCategory(value) {
    let currentCategories = this.state.categories;
    currentCateories.push(value);
    this.setState({categories: currentCategories});
  }

  handleAddSubcategory(value) {
    let currentSubcategories = this.state.subcategories;
    currentSubcateories.push(value);
    this.setState({subcategories: currentSubcategories});

  }

  handleClick(e) {
    console.log('click', e);
  }


  render() {
    return (
      <div>
        <div className="walkthroughInner">
          <Row>
            <Col span={6}>
              <div className="walkthroughCategories">
                <ul>
                  <li>Loop through</li>
                  <li>all</li>
                  <li>Categories</li>
                </ul>
              </div>
            </Col>

            <Col span={18}>
              <div className="walkthroughSubcategories">
                <ul>
                  <li>Loop through</li>
                  <li>all</li>
                  <li>subctegories based on selected category</li>
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

