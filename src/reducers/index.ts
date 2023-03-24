import { combineReducers } from 'redux';
import user from './user.reducer';
import articles from './articles.reducer';
import colors from './colors.reducer';
import tags from './tags.reducer';
import comments from './comments.reducer';
import offset from './offset.reducer';
import loading from './loading.reducer';
import hasLoadMore from './hasLoadMore.reducer';
import signIn from './signIn.reducer';
import signUp from './signUp.reducer';
import setting from './setting.reducer';
import commentLoading from './commentLoading.reducer';

const rootReducer = combineReducers({
  user,
  colors,
  articles,
  tags,
  comments,
  offset,
  loading,
  signIn,
  signUp,
  setting,
  hasLoadMore,
  commentLoading,
});

export default rootReducer;
