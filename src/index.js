import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store/index';
import routes from './routes';
import './country.css';

const root = document.getElementById('root');

render(
<Provider store={store}>
    <Router history={hashHistory} routes={routes}>
    </Router>
</Provider>,
root);