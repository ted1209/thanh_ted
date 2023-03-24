import { Action } from 'redux';
import toastr from 'toastr';
import * as types from '../actions/actionTypes';

const initialState = {
  userInfo: null,
  loginState: false,
  errorMessage: '',
  firstTimeSignIn: 0,
};
interface SignInAction extends Action {
  payload: string | any;
}

export default function signIn(state = initialState, action: SignInAction) {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      localStorage.setItem('token', action.payload?.data?.user?.token);
      return {
        ...state,
        userInfo: action.payload?.data?.user,
        loginState: true,
        firstTimeSignIn: state.firstTimeSignIn + 1,
      };
    }
    case types.SIGN_IN_FAIL: {
      toastr.error('Email or Password is wrong.');
      return {
        ...state,
        errorMessage: action.payload,
        firstTimeSignIn: state.firstTimeSignIn + 1,
      };
    }
    case types.SIGN_OUT: {
      return {
        ...state,
        userInfo: '',
        loginState: false,
        firstTimeSignIn: 0,
      };
    }
    default:
      return state;
  }
}
