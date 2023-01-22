import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

//import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//reducers
const feelingDispatch = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return Number(action.payload);
    }
    return state;
}
const understandingDispatch = (state = 0, action) => {
    if(action.type === 'SET_UNDERSTANDING'){
        return Number(action.payload);
    }
    return state;
}
const supportDispatch = (state = 0, action) => {
    if(action.type === 'SET_SUPPORT'){
        return Number(action.payload);
    }
    return state;
}
const commentDispatch = (state = [], action) => {
    if(action.type === 'SET_COMMENT'){
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(combineReducers ({
    //reducers go here
    feelingDispatch,
    understandingDispatch,
    supportDispatch,
    commentDispatch
}), applyMiddleware(logger));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
 document.getElementById('root'));
registerServiceWorker();
