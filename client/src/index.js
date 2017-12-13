import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

// import { LocaleProvider } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';


render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
