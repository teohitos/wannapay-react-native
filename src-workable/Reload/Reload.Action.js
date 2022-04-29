//REDUX - ADD CALLBACK
export const GET_RELOAD_SUCCESS = 'GET_RELOAD_SUCCESS';
export const GET_RELOAD_FAIL = 'GET_RELOAD_FAIL';
export const GET_RELOAD_REQUEST = 'GET_RELOAD_REQUEST';

export const getReloadSuccess = data => {
  // console.log('---- getReloadSuccess')
  return {type: GET_RELOAD_SUCCESS, payload: {data}};
};

export const getReloadFail = err => {
  // console.log('--- getReloadFail')
  return {type: GET_RELOAD_FAIL, payload: {err}};
};

export const getReloadRequest = (data) => {
  // console.log('--- getReloadRequest data', data)
  return {type: GET_RELOAD_REQUEST, payload: {data}};
};










