import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import mainReducer from './reducers';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(mainReducer, applyMiddleware(thunk, logger));
console.log('process.env', process.env);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
