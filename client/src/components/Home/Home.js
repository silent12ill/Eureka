import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/style.css';
import './home.css';
import NavHome from '../NavHome';
import Header from './Header';
import TopVideos from './TopVideos';
import HowItWorks from './HowItWorks';
import RecEngineInfo from './RecEngineInfo';
import FeaturedOne from './FeaturedOne';
import FeaturedTwo from './FeaturedTwo';


const Home = function(props) {
  return (
    <div>
      <div className='navbg'>
        <NavHome currentPage={props.currentPage} loggedIn={props.loggedIn} goToLogin={props.goToLogin} goToSignup={props.goToSignup} goToSubmitVideo={props.goToSubmitVideo} goToAccount={props.goToAccount} handleClickCategory={props.handleClickCategory} logout={props.logout} />
      </div>
      <Header handleClickCategory={props.handleClickCategory}/>
      <TopVideos />   
      <HowItWorks />
      <RecEngineInfo currentPage={props.currentPage} />
      <FeaturedOne />
      <FeaturedTwo />
    </div>
  )
}   
 

export default Home;