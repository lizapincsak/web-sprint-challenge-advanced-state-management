import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import "./index.css";
import App from "./App";

import reducer from '../src/reducers/index';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

const { worker } = require('./mocks/browser');
worker.start();

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root')
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.