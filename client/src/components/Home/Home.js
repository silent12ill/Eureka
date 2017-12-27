import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/style.css';
import './home.css';
import Header from './Header';
import TopVideos from './TopVideos';
import HowItWorks from './HowItWorks';
import RecEngineInfo from './RecEngineInfo';
import FeaturedOne from './FeaturedOne';
import FeaturedTwo from './FeaturedTwo';


const Home = function(props) {

  const handleClickCategory = (event) => {
    props.getPlaylistByCategory(event.target.name);
  }

  return (
    <div>
      <Header handleClickCategory={ handleClickCategory }/>
      <TopVideos />   
      <HowItWorks />
      <RecEngineInfo />
      <FeaturedOne />
      <FeaturedTwo />
    </div>
  )
};
 

export default Home;
