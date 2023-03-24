import * as types from '../actions/actionTypes';

const commentLoading = (state = true, action: any) => {
  switch (action.type) {
    case types.ON_CMT_LOAD:
      return true;
    case types.OFF_CMT_LOAD:
      return false;
    default:
      return state;
  }
};

export default commentLoading;
