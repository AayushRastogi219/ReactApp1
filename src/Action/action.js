import actionTypes from '../Constant/constant.js';

var nextMessageId = 0;
var nextUserId  = 0;

// export function changestate(updaetedUserName){
//   return(dispatch =>{
//     console.log('changeState called');
//     // dispatch({type:'ChangeUserName',payload:'Suryakant'});
//     dispatch({type:actionTypes.ChangeUserName,payload:updaetedUserName});
//   });
// }

export const addMessage = (message, author)=>({
  type: actionTypes.ADD_MESSAGE ,payload: nextMessageId++, message, author
})

export const addUser = (name)=>({
  type: actionTypes.ADD_USER, payload: nextUserId++, name
})
export const messageReceived=(message, author)=>({
  type: actionTypes.MESSAGE_RECEIVED, payload: nextMessageId++, message, author
})

export const populateUsersList =(users)=>({
  type: actionTypes.USERS_LIST, users
})
