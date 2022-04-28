import {call, put, takeLatest} from 'redux-saga/effects';
import {
  getCheckTransactionPhoneFail,
  getCheckTransactionPhoneSuccess,
  GET_CHECKTRANSACTIONPHONE_REQUEST,
  
  getVerifyPhoneFail,
  getVerifyPhoneSuccess,
  GET_VERIFYPIN_REQUEST,

} from './Transfer.Action';

import {
  getCheckTransactionPhone,

  getVerifyPin,
} from '../api';

import {sendNetworkFail} from '../actions';

export function* watchGetCheckTransactionPhone() {
  // console.log('--- watchGetCheckTransactionPhone')
  yield takeLatest(GET_CHECKTRANSACTIONPHONE_REQUEST, handleGetCheckTransactionPhone);
}

export function* watchGetVerifyPin() {
  // console.log('--- watchGetVerifyPin')
  yield takeLatest(GET_VERIFYPIN_REQUEST, handleGetVerifyPin);
}


function* handleGetCheckTransactionPhone(action) {
  console.log('--- handleGetCheckTransactionPhone action', action)
  
  const response = yield call(getCheckTransactionPhone, action.payload);
  
  if (response.ok) {
    yield put(getCheckTransactionPhoneSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getCheckTransactionPhoneFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getCheckTransactionPhoneFail(response.problem));
    }
  }
}

function* handleGetVerifyPin(action) {
  console.log('--- handleGetVerifyPin action', action)
  
  const response = yield call(getVerifyPin, action.payload);
  
  if (response.ok) {
    yield put(getVerifyPinSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getVerifyPinFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getVerifyPinFail(response.problem));
    }
  }
}
