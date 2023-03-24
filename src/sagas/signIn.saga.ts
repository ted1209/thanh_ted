import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import { SIGN_IN_URL } from '../constants/api';
import { getUserSuccess } from '../actions';

const getData = ({ email, password }: any) => {
  return axios({
    method: 'post',
    url: SIGN_IN_URL,
    data: {
      user: {
        email,
        password,
      },
    },
  });
};

function* fetchSignInData(action: any) {
  try {
    const response = yield call(getData, action.payload);
    yield put({ type: types.SIGN_IN_SUCCESS, payload: response });
    yield put(getUserSuccess(response.data));
  } catch (error: any) {
    yield put({ type: types.SIGN_IN_FAIL, payload: error.message });
  }
}

export default function* signInWorker() {
  yield takeLatest(types.SIGN_IN_REQUEST, fetchSignInData);
}
