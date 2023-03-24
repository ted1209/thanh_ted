import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_URL } from '../constants/api';
import * as types from '../actions/actionTypes';
import { getCommentsSuccess, addComment, offCmtLoad } from '../actions';

const getComments = ({ slug, token }: any) => {
  return axios({
    method: 'get',
    url: `${API_URL}/articles/${slug}/comments`,
    headers: {
      Authorization: token ? `Token ${token}` : '',
    },
  });
};

const postComment = ({ slug, comment, token }: any) => {
  return axios({
    method: 'post',
    url: `${API_URL}/articles/${slug}/comments`,
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      comment: {
        body: comment,
      },
    },
  });
};

const deleteComment = ({ slug, id, token }: any) =>
  axios({
    method: 'delete',
    url: `${API_URL}/articles/${slug}/comments/${id}`,
    headers: {
      Authorization: `Token ${token}`,
    },
  });

function* getCommentsAsync(action: any) {
  try {
    const data = yield call(getComments, action.payload);
    yield put(offCmtLoad());
    yield put(getCommentsSuccess(data.data.comments));
  } catch (error) {}
}

function* postCommentAsync(action: any) {
  try {
    const data = yield call(postComment, action.payload);
    yield put(addComment(data.data.comment));
  } catch (error) {}
}

function* deleteCommentAsync(action: any) {
  try {
    yield call(deleteComment, action.payload);
    const data = yield call(getComments, action.payload);
    yield put(getCommentsSuccess(data.data.comments));
  } catch (error) {}
}

function* commentsWorker() {
  yield takeLatest(types.GET_COMMENTS_REQUEST, getCommentsAsync);
  yield takeLatest(types.POST_COMMENT, postCommentAsync);
  yield takeLatest(types.DELETE_COMMENT_REQUEST, deleteCommentAsync);
}

export default commentsWorker;
