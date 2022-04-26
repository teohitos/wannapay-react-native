
//REDUX STEP CALLBACK
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';


//REDUX STEP CALLBACK
export const getProfileRequest = token => {
  console.log('---- getProfileRequest')
  return {type: GET_PROFILE_REQUEST, payload: {token}};
};

//REDUX STEP CALLBACK
export const getProfileSuccess = data => {
  console.log('---- getProfileSuccess')
  return {type: GET_PROFILE_SUCCESS, payload: {data}};
};

//REDUX STEP CALLBACK
export const getProfileFail = err => {
  console.log('---- getProfileFail')
  return {type: GET_PROFILE_FAIL, payload: {err}};
};
