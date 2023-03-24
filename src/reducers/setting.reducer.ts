import { Action } from 'redux';
import * as types from '../actions/actionTypes';

const initialState = {
  userInfo: null,
};
interface SettingAction extends Action {
  payload: string | any;
}

export default function settings(state = initialState, action: SettingAction) {
  switch (action.type) {
    case types.SETTING_UPDATE_SUCCESS: {
      localStorage.setItem('token', action.payload?.data?.user?.token);
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case types.SETTING_UPDATE_FAIL: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
