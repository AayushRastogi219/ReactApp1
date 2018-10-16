import messageReducer from './messageReducer';
import userReducer from './userReducer'
import {combineReducers} from 'redux';

// const combReducer = combineReducers({rootMessageReducer: messageReducer, rootUserReducer: userReducer});
const combReducer = combineReducers({messageReducer, userReducer});
export default combReducer;
