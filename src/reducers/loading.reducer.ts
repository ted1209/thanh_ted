import * as types from '../actions/actionTypes';

const loading = (state = true, action: any) => {
  switch (action.type) {
    case types.ON_LOAD:
      return true;
    case types.OFF_LOAD:
      return false;
    default:
      return state;
  }
};

export default loading;
