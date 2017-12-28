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
//
//
//


class Account extends React.Component {
	constructor() {
		super();
		this.state = {
      //state here
		};
	}

  componentDidMount() {
    console.log(this.props)
  }

  render() {
		return (
		  <div>
        <h4>Welcome {this.props.currentUser}!</h4>
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
