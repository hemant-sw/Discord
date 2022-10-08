import { composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers, createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import authReducers from './reducers/authReducers';


const rootReducers = combineReducers({
    auth: authReducers,
});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;

