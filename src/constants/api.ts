export const API_URL = 'https://conduit.productionready.io/api';

// 1. SIGNIN_AUTHENTICATION
// Methods: POST
// Required Fields : email, password
export const SIGN_IN_URL = `${API_URL}/users/login`;

// 2. REGISTRATION
// Methods : POST
// Required Fields : email, username, password
export const SIGN_UP_URL = `${API_URL}/users`;

// 3.GET_CURRENT_USER
// Method : GET
// Required : Authentication (token)
export const GET_USER = `${API_URL}/user`;

// 4.UPDATE_USER
// Method : PUT
// Required : Authentication(token)
export const EDIT_USER = `${API_URL}/user`;

// 5. GET_OTHER_USER_PROFILE
// Method : GET
export const GET_AUTHOR = `${API_URL}/profiles`;

export const ARTICLE_API = `${API_URL}/articles`;
