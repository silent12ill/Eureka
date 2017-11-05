import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

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
			<h1>Hello!</h1>
		  </div>
		)
  }
}

export default App;