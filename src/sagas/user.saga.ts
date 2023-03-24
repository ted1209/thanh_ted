import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import toastr from 'toastr';
import * as types from '../actions/actionTypes';
import { GET_USER, EDIT_USER, GET_AUTHOR } from '../constants/api';
import { getUserSuccess } from '../actions';

const getCurrentUserData = () => {
  return axios.get(GET_USER, {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });
};

function* getUserRequest() {
  try {
    const response = yield call(getCurrentUserData);
    yield put(getUserSuccess(response.data));
  } catch (error: any) {
    toastr.error('There was something wrong.');
  }
}

function* userWorker() {
  yield takeLatest(types.GET_USER_REQUEST, getUserRequest);
}

export default userWorker;
