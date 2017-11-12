import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

import Header from './Header';
import HeaderTopics from './HeaderTopics';
import TopVideos from './TopVideos';
import HowItWorks from './HowItWorks';
import RecEngineInfo from './RecEngineInfo';

// import Dashboard from './Dashboard';
import Slider from 'react-slick';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {

		};
	}

  render() {
		return (
      <div>
		    <Header headerTopics={HeaderTopics}/>
		    <TopVideos />
        <HowItWorks />
		    <RecEngineInfo />
		  </div>
    )
	}

}        

export default Home;