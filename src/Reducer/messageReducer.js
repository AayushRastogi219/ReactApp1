import actionTypes from '../Constant/constant';

const messageReducer = (states=[], action)=>{
  switch(action.type){
    case actionTypes.ADD_MESSAGE:
    case actionTypes.MESSAGE_RECEIVED:
      console.log('author is:',action.author)
      return states.concat([
        {
          message: action.message,
          author: action.author,
          payload: action.payload
        }
      ]);
    default:
      return states;
  }
}
export default messageReducer;
