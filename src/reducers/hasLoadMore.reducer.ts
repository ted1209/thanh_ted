import * as types from '../actions/actionTypes';

const hasLoadMore = (state = true, action: any) => {
  switch (action.type) {
    case types.HAS_LOAD_MORE:
      return action.payload;
    default:
      return state;
  }
};

export default hasLoadMore;
