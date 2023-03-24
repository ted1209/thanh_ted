import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import { EDIT_USER } from '../constants/api';

const updateData = ({ username, email, password, image, bio }: any) => {
  return axios({
    method: 'put',
    url: EDIT_USER,
    data: {
      user: {
        username,
        email,
        password,
        image,
        bio,
      },
    },
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  });
};

function* fetchSettingData(action: any) {
  try {
    const response = yield call(updateData, action.payload);
    yield put({ type: types.SETTING_UPDATE_SUCCESS, payload: response });
  } catch (error: any) {
    yield put({ type: types.SETTING_UPDATE_FAIL, message: error.message });
  }
}

export default function* settingUpdate() {
  yield takeLatest(types.SETTING_UPDATE, fetchSettingData);
}
