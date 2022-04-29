import {call, put, takeLatest} from 'redux-saga/effects';
import {
  getCheckPhoneFail,
  getCheckPhoneSuccess,
  GET_CHECKPHONE_REQUEST,

  getForgotPinOtpFail,
  getForgotPinOtpSuccess,
  GET_FORGOTPINOTP_REQUEST,

  getForgotPinQuestionFail,
  getForgotPinQuestionSuccess,
  GET_FORGOTPINQUESTION_REQUEST,

  getForgotPinVerifyIdentityFail,
  getForgotPinVerifyIdentitySuccess,
  GET_FORGOTPINVERIFYIDENTITY_REQUEST,

  getForgotPinVerifyQuestionFail,
  getForgotPinVerifyQuestionSuccess,
  GET_FORGOTPINVERIFYQUESTION_REQUEST,
  
  getForgotPinFail,
  getForgotPinSuccess,
  GET_FORGOTPIN_REQUEST,

} from './ForgotPIN.Action';

import {
  getCheckPhone, 
  getForgotPinOtp, 
  getForgotPinQuestion, 
  getForgotPinVerifyIdentity, 
  getForgotPinVerifyQuestion,
  getForgotPin,

} from '../api';

import {sendNetworkFail} from '../actions';

export function* watchGetCheckPhone() {
  // console.log('--- watchGetCheckPhone')
  yield takeLatest(GET_CHECKPHONE_REQUEST, handleGetCheckPhone);
}

export function* watchGetForgotPinOtp() {
  // console.log('--- watchGetForgotPinOtp')
  yield takeLatest(GET_FORGOTPINOTP_REQUEST, handleGetForgotPinOtp);
}

export function* watchGetForgotPinQuestion() {
  // console.log('--- watchGetForgotPinQuestion')
  yield takeLatest(GET_FORGOTPINQUESTION_REQUEST, handleGetForgotPinQuestion);
}

export function* watchGetForgotPinVerifyIdentity() {
  // console.log('--- watchGetForgotPinVerifyIdentity')
  yield takeLatest(GET_FORGOTPINVERIFYIDENTITY_REQUEST, handleGetForgotPinVerifyIdentity);
}

export function* watchGetForgotPinVerifyQuestion() {
  // console.log('--- watchGetForgotPinVerifyQuestion')
  yield takeLatest(GET_FORGOTPINVERIFYQUESTION_REQUEST, handleGetForgotPinVerifyQuestion);
}
  
export function* watchGetForgotPin() {
  // console.log('--- watchGetForgotPin')
  yield takeLatest(GET_FORGOTPIN_REQUEST, handleGetForgotPin);
}


function* handleGetCheckPhone(action) {
  // console.log('--- handleGetCheckPhone action', action)
  
  const response = yield call(getCheckPhone, action.payload);

  if (response.ok) {
    yield put(getCheckPhoneSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getCheckPhoneFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getCheckPhoneFail(response.problem));
    }
  }
}

function* handleGetForgotPinOtp(action) {
  // console.log('--- handleGetForgotPinOtp action', action)
  
  const response = yield call(getForgotPinOtp, action.payload);

  if (response.ok) {
    yield put(getForgotPinOtpSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getForgotPinOtpFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getForgotPinOtpFail(response.problem));
    }
  }
}

function* handleGetForgotPinQuestion(action) {
  // console.log('--- handleGetForgotPinQuestion action', action)
  
  const response = yield call(getForgotPinQuestion, action.payload);

  if (response.ok) {
    yield put(getForgotPinQuestionSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getForgotPinQuestionFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getForgotPinQuestionFail(response.problem));
    }
  }
}

function* handleGetForgotPinVerifyIdentity(action) {
  // console.log('--- handleGetForgotPinVerifyIdentity action', action)
  
  const response = yield call(getForgotPinVerifyIdentity, action.payload);
  
  if (response.ok) {
    yield put(getForgotPinVerifyIdentitySuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getForgotPinVerifyIdentityFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getForgotPinVerifyIdentityFail(response.problem));
    }
  }
}

function* handleGetForgotPinVerifyQuestion(action) {
  // console.log('--- handleGetForgotPinVerifyQuestion action', action)
  
  const response = yield call(getForgotPinVerifyQuestion, action.payload);
  
  if (response.ok) {
    yield put(getForgotPinVerifyQuestionSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getForgotPinVerifyQuestionFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getForgotPinVerifyQuestionFail(response.problem));
    }
  }
}

function* handleGetForgotPin(action) {
  // console.log('--- handleGetForgotPin action', action)
  
  const response = yield call(getForgotPin, action.payload);
  
  if (response.ok) {
    yield put(getForgotPinSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getForgotPinFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getForgotPinFail(response.problem));
    }
  }
}
