import actionTypes from '../Constant/constant';
import {addUser, messageReceived, populateUsersList} from '../Action/action';

const setupSocket = (dispatch, userName) =>{
  const socket = new WebSocket("ws://localhost:8989");
  socket.onopen = ()=>{
    socket.send(JSON.stringify({
      type: actionTypes.ADD_USER, name: userName
    }))
  }

  socket.onmessage = (payload)=>{
    const data = JSON.parse(payload.data);
    switch (data.type){
      case actionTypes.ADD_USER:
        dispatch(addUser(data.name));
        break;
      case actionTypes.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author));
        break;
      case actionTypes.USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }

  }
  return socket;
}

export default setupSocket;
