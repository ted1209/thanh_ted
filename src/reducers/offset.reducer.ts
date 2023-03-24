import * as types from '../actions/actionTypes';

const offset = (state = 0, action: any) => {
  switch (action.type) {
    case types.CHANGE_OFFSET:
      return action.payload;
    default:
      return state;
  }
};

export default offset;
