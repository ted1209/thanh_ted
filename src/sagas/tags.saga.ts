import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_URL } from '../constants/api';
import * as types from '../actions/actionTypes';
import { getTagsSuccess } from '../actions';

const getData = () => {
  return axios({
    method: 'get',
    url: `${API_URL}/tags`,
  });
};

function* getTagsAsync() {
  try {
    const data = yield call(getData);
    yield put(getTagsSuccess(data.data.tags));
  } catch (error) {}
}

function* tagsWorker() {
  yield takeLatest(types.GET_TAGS_REQUEST, getTagsAsync);
}

export default tagsWorker;
