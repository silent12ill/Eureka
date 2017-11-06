import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { Affix, Row, Col } from 'antd';

import Nav from './Nav';
import HowItWorks from './HowItWorks';
import GetStarted from './GetStarted';
import Explore from './Explore';
import Dashboard from './Dashboard';
import FeaturedContent from './FeaturedContent';



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


        { this.state.current === 'home' && <div>
			    <GetStarted />
			    <HowItWorks />
			    <Explore />
			    <FeaturedContent />
			    </div>
		    }
		    {this.state.current === 'dashboard' && <div>
          <Dashboard />
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