export const GET_VALIDATEPHONE_SUCCESS = 'GET_VALIDATEPHONE_SUCCESS';
export const GET_VALIDATEPHONE_FAIL = 'GET_VALIDATEPHONE_FAIL';
export const GET_VALIDATEPHONE_REQUEST = 'GET_VALIDATEPHONE_REQUEST';

export const GET_SIGNUPOTP_SUCCESS = 'GET_SIGNUPOTP_SUCCESS';
export const GET_SIGNUPOTP_FAIL = 'GET_SIGNUPOTP_FAIL';
export const GET_SIGNUPOTP_REQUEST = 'GET_SIGNUPOTP_REQUEST';

export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAIL = 'GET_REGISTER_FAIL';
export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';

export const GET_CHECKBALANCE_SUCCESS = 'GET_CHECKBALANCE_SUCCESS';
export const GET_CHECKBALANCE_FAIL = 'GET_CHECKBALANCE_FAIL';
export const GET_CHECKBALANCE_REQUEST = 'GET_CHECKBALANCE_REQUEST';

export const GET_CHECKTRANSACTION_SUCCESS = 'GET_CHECKTRANSACTION_SUCCESS';
export const GET_CHECKTRANSACTION_FAIL = 'GET_CHECKTRANSACTION_FAIL';
export const GET_CHECKTRANSACTION_REQUEST = 'GET_CHECKTRANSACTION_REQUEST';

export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';
export const GET_QUESTION_FAIL = 'GET_QUESTION_FAIL';
export const GET_QUESTION_REQUEST = 'GET_QUESTION_REQUEST';

export const getValidatePhoneSuccess = data => {
  // console.log('---- getValidatePhoneSuccess')
  return {type: GET_VALIDATEPHONE_SUCCESS, payload: {data}};
};

export const getValidatePhoneFail = err => {
  // console.log('--- getValidatePhoneFail')
  return {type: GET_VALIDATEPHONE_FAIL, payload: {err}};
};

export const getValidatePhoneRequest = (data) => {
  // console.log('--- getValidatePhoneRequest data', data)
  return {type: GET_VALIDATEPHONE_REQUEST, payload: {data}};
};

export const getSignUpOtpSuccess = data => {
  // console.log('---- getSignUpOtpSuccess')
  return {type: GET_SIGNUPOTP_SUCCESS, payload: {data}};
};

export const getSignUpOtpFail = err => {
  // console.log('--- getSignUpOtpFail')
  return {type: GET_SIGNUPOTP_FAIL, payload: {err}};
};

export const getSignUpOtpRequest = (data) => {
  // console.log('--- getSignUpOtpRequest data', data)
  return {type: GET_SIGNUPOTP_REQUEST, payload: {data}};
};

export const getRegisterSuccess = data => {
  // console.log('---- getRegisterSuccess')
  return {type: GET_REGISTER_SUCCESS, payload: {data}};
};

export const getRegisterFail = err => {
  // console.log('--- getRegisterFail')
  return {type: GET_REGISTER_FAIL, payload: {err}};
};

export const getRegisterRequest = (data) => {
  // console.log('--- getRegisterRequest data', data)
  return {type: GET_REGISTER_REQUEST, payload: {data}};
};

export const getCheckBalanceSuccess = data => {
  // console.log('---- getCheckBalanceSuccess')
  return {type: GET_CHECKBALANCE_SUCCESS, payload: {data}};
};

export const getCheckBalanceFail = err => {
  // console.log('--- getCheckBalanceFail')
  return {type: GET_CHECKBALANCE_FAIL, payload: {err}};
};

export const getCheckBalanceRequest = (data) => {
  // console.log('--- getCheckBalanceRequest data', data)
  return {type: GET_CHECKBALANCE_REQUEST, payload: {data}};
};

export const getCheckTransactionSuccess = data => {
  // console.log('---- getCheckTransactionSuccess')
  return {type: GET_CHECKTRANSACTION_SUCCESS, payload: {data}};
};

export const getCheckTransactionFail = err => {
  // console.log('--- getCheckTransactionFail')
  return {type: GET_CHECKTRANSACTION_FAIL, payload: {err}};
};

export const getCheckTransactionRequest = (data) => {
  // console.log('--- getCheckTransactionRequest data', data)
  return {type: GET_CHECKTRANSACTION_REQUEST, payload: {data}};
};

export const getQuestionSuccess = data => {
  // console.log('---- getQuestionSuccess')
  return {type: GET_QUESTION_SUCCESS, payload: {data}};
};

export const getQuestionFail = err => {
  // console.log('--- getQuestionFail')
  return {type: GET_QUESTION_FAIL, payload: {err}};
};

export const getQuestionRequest = (data) => {
  // console.log('--- getQuestionRequest data', data)
  return {type: GET_QUESTION_REQUEST, payload: {data}};
};







