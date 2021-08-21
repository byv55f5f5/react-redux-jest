import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'normalize.css';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/App';
import store from './app/store';

const [body] = window.document.getElementsByTagName('body');

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  body
);
