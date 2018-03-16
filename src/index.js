import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseAction';
import { createMemoryHistory } from 'history';

import './styles/styles.css';

const store = configureStore();
store.dispatch(loadCourses());

const memoryHistory = createMemoryHistory(location);


render(
    <Provider store={store}>
    <Router history={memoryHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);