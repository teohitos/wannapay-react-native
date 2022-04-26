export const GET_CHECKTRANSACTIONPHONE_SUCCESS = 'GET_CHECKTRANSACTIONPHONE_SUCCESS';
export const GET_CHECKTRANSACTIONPHONE_FAIL = 'GET_CHECKTRANSACTIONPHONE_FAIL';
export const GET_CHECKTRANSACTIONPHONE_REQUEST = 'GET_CHECKTRANSACTIONPHONE_REQUEST';

export const GET_VERIFYPIN_SUCCESS = 'GET_VERIFYPIN_SUCCESS';
export const GET_VERIFYPIN_FAIL = 'GET_VERIFYPIN_FAIL';
export const GET_VERIFYPIN_REQUEST = 'GET_VERIFYPIN_REQUEST';

export const getCheckTransactionPhoneSuccess = data => {
  // console.log('---- getCheckTransactionPhoneSuccess')
  return {type: GET_CHECKTRANSACTIONPHONE_SUCCESS, payload: {data}};
};

export const getCheckTransactionPhoneFail = err => {
  // console.log('--- getCheckTransactionPhoneFail')
  return {type: GET_CHECKTRANSACTIONPHONE_FAIL, payload: {err}};
};

export const getCheckTransactionPhoneRequest = (data) => {
  // console.log('--- getCheckTransactionPhoneRequest data', data)
  return {type: GET_CHECKTRANSACTIONPHONE_REQUEST, payload: {data}};
};

export const getVerifyPinSuccess = data => {
  // console.log('---- getVerifyPinSuccess')
  return {type: GET_VERIFYPIN_SUCCESS, payload: {data}};
};

export const getVerifyPinFail = err => {
  // console.log('--- getVerifyPinFail')
  return {type: GET_VERIFYPIN_FAIL, payload: {err}};
};

export const getVerifyPinRequest = (data) => {
  // console.log('--- getVerifyPinRequest data', data)
  return {type: GET_VERIFYPIN_REQUEST, payload: {data}};
};









