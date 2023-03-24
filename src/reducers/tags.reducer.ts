import * as types from '../actions/actionTypes';

const tags = (state = [], action: any) => {
  switch (action.type) {
    case types.GET_TAGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default tags;
