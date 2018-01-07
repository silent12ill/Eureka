import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../css/style.css';
import './home.css';
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

export default Home;
