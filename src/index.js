import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import rootReducer from './reducers';
import './assets/style.scss';
import App from './components/App';

const store = createStore(
  rootReducer,
  applyMiddleware(Logger, Thunk),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
