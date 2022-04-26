// Get profile github
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAIL = 'GET_LOGIN_FAIL';
export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST';

export const getLoginSuccess = data => {
  console.log('---- getLoginSuccess')
  return {type: GET_LOGIN_SUCCESS, payload: {data}};
};

export const getLoginFail = err => {
  console.log('--- getLoginFail')
  return {type: GET_LOGIN_FAIL, payload: {err}};
};

export const getLoginRequest = (data) => {
  console.log('--- getLoginRequest', data)
  return {type: GET_LOGIN_REQUEST, payload: {data}};
};

export const getLogoutRequest = (data) => {
  console.log('--- getLogoutRequest', data)
  return {type: GET_LOGOUT_REQUEST, payload: {data}};
};
