import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//redux imports
import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
//reducers
import reducer from './store/reducers/reducer'
import homeReducer from './store/reducers/homeReducer';
import analyticsReducer from './store/reducers/analyticsReducer';
import surveyReducer from './store/reducers/surveyReducer'
//async library
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    //state that is used by the whole application
    appWide: reducer,
    //state that is used by home page
    home: homeReducer,
    analytics: analyticsReducer,
    create: surveyReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//this is where the app wide state is
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
