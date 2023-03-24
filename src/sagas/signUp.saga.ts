import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import { SIGN_UP_URL } from '../constants/api';

const getData = ({ username, email, password }: any) => {
  return axios({
    method: 'post',
    url: SIGN_UP_URL,
    data: {
      user: {
        username,
        email,
        password,
      },
    },
  });
};

function* fetchSignUpData(action: any) {
  try {
    const response = yield call(getData, action.payload);
    yield put({ type: types.SIGN_UP_SUCCESS, payload: response });
  } catch (error: any) {
    yield put({ type: types.SIGN_UP_FAIL, payload: error.message });
  }
}

export default function* signUpWorker() {
  yield takeLatest(types.SIGN_UP_REQUEST, fetchSignUpData);
}
