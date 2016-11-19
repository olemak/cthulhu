import React from 'react';
import ReactDOM from 'react-dom';

// Redux
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import actions from './reducers/'

import App from './App';
import './assets/style/normalize.css';
import './assets/style/skeleton.css';
import './assets/style/index.css';



//let store = createStore(actions)



ReactDOM.render(
/*	<Provider store={store}> */
	  <App />
/*	</Provider> */
  , document.getElementById('root')
);
