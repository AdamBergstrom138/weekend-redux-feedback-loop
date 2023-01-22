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
// NOT 100% ON THIS ONE
// const feeling = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_FEELING':
//           return action.payload; 
//         default:
//           return state;
//       }
// }
const feelingDispatch = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return Number(action.payload);
    }
    return state;
}
// maybe more like this
// const pizzaOrder = (state = [], action) => {
//     if (action.type === 'SET_ORDER') {
//         return [...state, action.payload];
//     }
//     return state;
// }
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
