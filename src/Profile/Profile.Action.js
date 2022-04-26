
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';


export const getProfileRequest = token => {
  // console.log('---- getProfileRequest')
  return {type: GET_PROFILE_REQUEST, payload: {token}};
};

export const getProfileSuccess = data => {
  // console.log('---- getProfileSuccess')
  return {type: GET_PROFILE_SUCCESS, payload: {data}};
};

export const getProfileFail = err => {
  // console.log('---- getProfileFail')
  return {type: GET_PROFILE_FAIL, payload: {err}};
};
