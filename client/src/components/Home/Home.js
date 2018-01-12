import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../css/style.css';
import './home.css';
import Connect from '../Connect';
import Header from './Header';
import TopVideos from './TopVideos';
import HowItWorks from './HowItWorks';
import RecEngineInfo from './RecEngineInfo';
import FeaturedOne from './FeaturedOne';
import FeaturedTwo from './FeaturedTwo';
import videoThumbnail from '../../images/videoThumbnail.jpg';


class Home extends React.Component {

  componentDidMount() {
    this.getTopVideos();

    let lsEmail = localStorage.getItem('email');
    let lsToken = localStorage.getItem('token');

    if( lsEmail && lsToken ) {
      axios.get('/api/verifyToken', {
        params: {
          email: lsEmail,
          token: lsToken
        }
      })
      .then((response) => {
          const userData = response.data.userData;

          this.props.setUserBookmarks(userData.bookmarks);
          this.props.setUserLikes(userData.videoPreference.liked); //check if exists, if so, don't readd
          this.props.setUserDislikes(userData.videoPreference.disliked); //check if exists, if so, don't readd

          const userCategories = userData.categoryPreference.preferences;
          let parsedCategories = {};
          for (var i = 0; i < userCategories.length; i++) {
            let category = userCategories[i].category;
            let subcategories = userCategories[i].subcategory;
            console.log('category', category, 'subcategories', subcategories)
            parsedCategories[category] = subcategories;
          };
          this.props.setUserCategories(parsedCategories);

          this.props.setLoggedInStatus(true);
          this.props.setCurrentUser(lsEmail);
          this.props.getMindfeedPlaylist(lsEmail);

      })
      .catch((error) => {
        console.log(error);
      })
      
    }
    //fetch local storage token and email
    // console.log("Token in localstorage", localStorage.getItem('token'));
    // console.log("Email in localstorage", localStorage.getItem('email'));
    //validate token
    //if so, 
  }

  handleClickCategory = (event) => {
    this.props.getPlaylistByCategory(event.target.name);
  }

  getTopVideos = () => {
    axios.get('/api/getTopVideos')
    .then((response) => {
      let allVideos = response.data;
      this.props.setTopVideos(allVideos);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <Header handleClickCategory={ this.handleClickCategory }/>
        <TopVideos topVideos={ this.props.topVideos } setCurrentVideo={ this.props.setCurrentVideo } history={ this.props.history }/>
        <HowItWorks />
        <RecEngineInfo />
        <FeaturedOne />
        <FeaturedTwo />
      </div>
    )
  }
}

export default Connect(Home);
