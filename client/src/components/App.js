import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { Affix, Row, Col } from 'antd';
import Nav from './Nav';
import HowItWorks from './HowItWorks';
import Header from './Header';
import HeaderTopics from './HeaderTopics';
// import Dashboard from './Dashboard';
import RecEngineInfo from './RecEngineInfo';
import SignUpInfo from './SignUpInfo';
import TopVideos from './TopVideos';
import Slider from 'react-slick';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
      current: 'home',
		};
	}

  //functions here

  render() {


		return (
		  <div>

		    <div className='navbg'>
		      <Nav />
		    </div>


        <div>
			    <Header />
			    <TopVideos />
          <HowItWorks />
			    <RecEngineInfo />
			  </div>
		    
		    }

		    <footer className='footer'>
		    Some footer stuff
		    Credits
		    About
		    Logos
		    </footer>
        




		  </div>
		)
  }
}

export default App;