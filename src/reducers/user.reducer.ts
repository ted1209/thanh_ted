import { Action } from 'redux';
import * as types from '../actions/actionTypes';

const initialState = {
  userInfo: null,
};
interface UserAction extends Action {
  payload: string | any;
}

const user = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload?.user,
      };
    case types.CLEAR_USER:
      return {};
    default:
      return state;
  }
};

export default user;
