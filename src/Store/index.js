import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import allReducers from './reducer'
import combReducer from '../Reducer/index';
import setupSocket from '../Sockets/index';
import handleNewMessage from '../Sagas/index';
import username from '../Utils/name';

const sagaMiddleware= createSagaMiddleware();

const store=createStore(combReducer, {}, applyMiddleware(sagaMiddleware));

const socket = setupSocket(store.dispatch, username);
sagaMiddleware.run(handleNewMessage, {socket, username});

 export default store;
