import {call, put, takeLatest} from 'redux-saga/effects';
import {
  getCheckTransactionPhoneFail,
  getCheckTransactionPhoneSuccess,
  GET_CHECKTRANSACTIONPHONE_REQUEST,
  
  getVerifyPinFail,
  getVerifyPinSuccess,
  GET_VERIFYPIN_REQUEST,
  
  getTransferFail,
  getTransferSuccess,
  GET_TRANSFER_REQUEST,
  
} from './Transfer.Action';

import {
  getCheckTransactionPhone,
  getVerifyPin,
  getTransfer,

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

export function* watchGetTransfer() {
  console.log('--- watchGetTransfer')
  yield takeLatest(GET_TRANSFER_REQUEST, handleGetTransfer);
}


function* handleGetCheckTransactionPhone(action) {
  // console.log('--- handleGetCheckTransactionPhone action', action)
  
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
  // console.log('--- handleGetVerifyPin action', action)
  
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

function* handleGetTransfer(action) {
  console.log('--- handleGetTransfer action', action)
  
  const response = yield call(getTransfer, action.payload);
  
  if (response.ok) {
    yield put(getTransferSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getTransferFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getTransferFail(response.problem));
    }
  }
}
