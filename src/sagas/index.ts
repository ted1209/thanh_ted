import { all, fork } from 'redux-saga/effects';
import userWorker from './user.saga';
import articlesWorker from './articles.saga';
import tagsWorker from './tags.saga';
import commentsWorker from './comments.saga';
import signInWorker from './signIn.saga';
import signUpWorker from './signUp.saga';
import settingUpdate from './setting.saga';

function* rootSaga() {
  yield all([
    fork(userWorker),
    fork(articlesWorker),
    fork(tagsWorker),
    fork(commentsWorker),
    fork(signInWorker),
    fork(signUpWorker),
    fork(settingUpdate),
  ]);
}

export default rootSaga;
