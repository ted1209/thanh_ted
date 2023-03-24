import * as types from '../actions/actionTypes';

const articles = (state = [], action: any) => {
  switch (action.type) {
    case types.CHANGE_ARTICLES: {
      return action.payload;
    }
    case types.ADD_ARTICLES: {
      return [...state, ...action.payload];
    }
    case types.POST_ARTICLE_SUCCESS: {
      return [action.payload, ...state];
    }
    case types.UPDATE_ARTICLES: {
      const newState = state.map((item: any) => {
        if (item.slug === action.payload.slug) {
          return action.payload;
        }
        return item;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default articles;
