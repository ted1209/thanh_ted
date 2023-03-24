import * as types from '../actions/actionTypes';

const comments = (state = [], action: any) => {
  switch (action.type) {
    case types.GET_COMMENTS_SUCCESS:
      return action.payload;
    case types.ADD_COMMENT:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default comments;
