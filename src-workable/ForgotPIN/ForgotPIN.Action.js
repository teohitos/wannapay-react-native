export const GET_CHECKPHONE_SUCCESS = 'GET_CHECKPHONE_SUCCESS';
export const GET_CHECKPHONE_FAIL = 'GET_CHECKPHONE_FAIL';
export const GET_CHECKPHONE_REQUEST = 'GET_CHECKPHONE_REQUEST';

export const GET_FORGOTPINOTP_SUCCESS = 'GET_FORGOTPINOTP_SUCCESS';
export const GET_FORGOTPINOTP_FAIL = 'GET_FORGOTPINOTP_FAIL';
export const GET_FORGOTPINOTP_REQUEST = 'GET_FORGOTPINOTP_REQUEST';

export const GET_FORGOTPINQUESTION_SUCCESS = 'GET_FORGOTPINQUESTION_SUCCESS';
export const GET_FORGOTPINQUESTION_FAIL = 'GET_FORGOTPINQUESTION_FAIL';
export const GET_FORGOTPINQUESTION_REQUEST = 'GET_FORGOTPINQUESTION_REQUEST';

export const GET_FORGOTPINVERIFYIDENTITY_SUCCESS = 'GET_FORGOTPINVERIFYIDENTITY_SUCCESS';
export const GET_FORGOTPINVERIFYIDENTITY_FAIL = 'GET_FORGOTPINVERIFYIDENTITY_FAIL';
export const GET_FORGOTPINVERIFYIDENTITY_REQUEST = 'GET_FORGOTPINVERIFYIDENTITY_REQUEST';
export const GET_FORGOTPINVERIFYIDENTITY_CLEAR = 'GET_FORGOTPINVERIFYIDENTITY_CLEAR';

export const GET_FORGOTPINVERIFYQUESTION_SUCCESS = 'GET_FORGOTPINVERIFYQUESTION_SUCCESS';
export const GET_FORGOTPINVERIFYQUESTION_FAIL = 'GET_FORGOTPINVERIFYQUESTION_FAIL';
export const GET_FORGOTPINVERIFYQUESTION_REQUEST = 'GET_FORGOTPINVERIFYQUESTION_REQUEST';

export const GET_FORGOTPIN_SUCCESS = 'GET_FORGOTPIN_SUCCESS';
export const GET_FORGOTPIN_FAIL = 'GET_FORGOTPIN_FAIL';
export const GET_FORGOTPIN_REQUEST = 'GET_FORGOTPIN_REQUEST';
export const GET_FORGOTPIN_CLEAR = 'GET_FORGOTPIN_CLEAR';

export const getCheckPhoneSuccess = data => {
  // console.log('---- getCheckPhoneSuccess')
  return {type: GET_CHECKPHONE_SUCCESS, payload: {data}};
};

export const getCheckPhoneFail = err => {
  // console.log('--- getCheckPhoneFail')
  return {type: GET_CHECKPHONE_FAIL, payload: {err}};
};

export const getCheckPhoneRequest = (data) => {
  // console.log('--- getCheckPhoneRequest', data)
  return {type: GET_CHECKPHONE_REQUEST, payload: {data}};
};

export const getForgotPinOtpSuccess = data => {
  // console.log('---- getForgotPinOtpSuccess')
  return {type: GET_FORGOTPINOTP_SUCCESS, payload: {data}};
};

export const getForgotPinOtpFail = err => {
  // console.log('--- getForgotPinOtpFail')
  return {type: GET_FORGOTPINOTP_FAIL, payload: {err}};
};

export const getForgotPinOtpRequest = (data) => {
  // console.log('--- getForgotPinOtpRequest', data)
  return {type: GET_FORGOTPINOTP_REQUEST, payload: {data}};
};

export const getForgotPinQuestionSuccess = data => {
  console.log('---- getForgotPinQuestionSuccess')
  return {type: GET_FORGOTPINQUESTION_SUCCESS, payload: {data}};
};

export const getForgotPinQuestionFail = err => {
  console.log('--- getForgotPinQuestionFail')
  return {type: GET_FORGOTPINQUESTION_FAIL, payload: {err}};
};

export const getForgotPinQuestionRequest = (data) => {
  console.log('--- getForgotPinQuestionRequest', data)
  return {type: GET_FORGOTPINQUESTION_REQUEST, payload: {data}};
};

export const getForgotPinVerifyIdentitySuccess = data => {
  // console.log('---- getForgotPinVerifyIdentitySuccess')
  return {type: GET_FORGOTPINVERIFYIDENTITY_SUCCESS, payload: {data}};
};

export const getForgotPinVerifyIdentityFail = err => {
  // console.log('--- getForgotPinVerifyIdentityFail')
  return {type: GET_FORGOTPINVERIFYIDENTITY_FAIL, payload: {err}};
};

export const getForgotPinVerifyIdentityClear = err => {
  // console.log('--- getForgotPinVerifyIdentityClear')
  return {type: GET_FORGOTPINVERIFYIDENTITY_CLEAR, payload: {err}};
};

export const getForgotPinVerifyIdentityRequest = (data) => {
  // console.log('--- getForgotPinVerifyIdentityRequest data', data)
  return {type: GET_FORGOTPINVERIFYIDENTITY_REQUEST, payload: {data}};
};

export const getForgotPinVerifyQuestionSuccess = data => {
  // console.log('---- getForgotPinVerifyQuestionSuccess')
  return {type: GET_FORGOTPINVERIFYQUESTION_SUCCESS, payload: {data}};
};

export const getForgotPinVerifyQuestionFail = err => {
  // console.log('--- getForgotPinVerifyQuestionFail')
  return {type: GET_FORGOTPINVERIFYQUESTION_FAIL, payload: {err}};
};

export const getForgotPinVerifyQuestionRequest = (data) => {
  // console.log('--- getForgotPinVerifyQuestionRequest data', data)
  return {type: GET_FORGOTPINVERIFYQUESTION_REQUEST, payload: {data}};
};

export const getForgotPinSuccess = data => {
  // console.log('---- getForgotPinSuccess')
  return {type: GET_FORGOTPIN_SUCCESS, payload: {data}};
};

export const getForgotPinFail = err => {
  // console.log('--- getForgotPinFail')
  return {type: GET_FORGOTPIN_FAIL, payload: {err}};
};

export const getForgotPinRequest = (data) => {
  // console.log('--- getForgotPinRequest data', data)
  return {type: GET_FORGOTPIN_REQUEST, payload: {data}};
};




