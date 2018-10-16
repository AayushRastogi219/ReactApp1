import actionTypes from '../Constant/constant';

const userReducer=(states=[], action)=>{
  switch(action.type){
    case actionTypes.ADD_USER:
      return states.concat([
        {
          name: action.name,
          payload: action.payload
        }
      ])
    case actionTypes.USERS_LIST:
      return action.users;
    default:
      return states;
  }
}
export default userReducer;
