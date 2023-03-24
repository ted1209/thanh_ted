import { Action } from 'redux';
import toastr from 'toastr';
import * as types from '../actions/actionTypes';

const initialState = {
  userInfo: null,
  errorMessage: '',
  loginState: false,
  firstTimeSignIn: 0,
};

interface SignUpAction extends Action {
  key: any;
  payload: string | any;
}

export default function signUp(state = initialState, action: SignUpAction) {
  switch (action.type) {
    case types.SIGN_UP_SUCCESS: {
      localStorage.setItem('token', action.payload?.data?.user?.token);
      return {
        ...state,
        userInfo: action.payload?.data?.user,
        loginState: true,
      };
    }
    case types.SIGN_UP_FAIL: {
      toastr.error('Email or user name has alredy been taken.');
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
}
