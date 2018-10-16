import {takeEvery} from 'redux-saga/effects'
import actionTypes from '../Constant/constant'

const handleNewMessage = function* handleNewMessage(params){
  yield takeEvery(actionTypes.ADD_MESSAGE, (action)=>{
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  })
}
export default handleNewMessage;
