import {call, put, takeLatest} from 'redux-saga/effects';
import {
  getValidatePhoneFail,
  getValidatePhoneSuccess,
  GET_VALIDATEPHONE_REQUEST,

  getSignUpOtpFail,
  getSignUpOtpSuccess,
  GET_SIGNUPOTP_REQUEST,
 
  getRegisterFail,
  getRegisterSuccess,
  GET_REGISTER_REQUEST,
  
  getCheckBalanceFail,
  getCheckBalanceSuccess,
  GET_CHECKBALANCE_REQUEST,
  
  getCheckTransactionFail,
  getCheckTransactionSuccess,
  GET_CHECKTRANSACTION_REQUEST,
  
  getQuestionFail,
  getQuestionSuccess,
  GET_QUESTION_REQUEST,
  
} from './SignUp.Action';

import {
  getValidatePhone,
  getSignUpOtp,
  getRegister,
  getCheckBalance,
  getCheckTransaction,
  getQuestion, 

} from '../api';

import {sendNetworkFail} from '../actions';

export function* watchGetValidatePhone() {
  // console.log('--- watchGetValidatePhone')
  yield takeLatest(GET_VALIDATEPHONE_REQUEST, handleGetValidatePhone);
}

export function* watchGetSignUpOtp() {
  // console.log('--- watchGetSignUpOtp')
  yield takeLatest(GET_SIGNUPOTP_REQUEST, handleGetSignUpOtp);
}

export function* watchGetRegister() {
  // console.log('--- watchGetRegister')
  yield takeLatest(GET_REGISTER_REQUEST, handleGetRegister);
}

export function* watchGetCheckBalance() {
  // console.log('--- watchGetCheckBalance')
  yield takeLatest(GET_CHECKBALANCE_REQUEST, handleGetCheckBalance);
}

export function* watchGetCheckTransaction() {
  // console.log('--- watchGetCheckBalance')
  yield takeLatest(GET_CHECKTRANSACTION_REQUEST, handleGetCheckTransaction);
}

export function* watchGetQuestion() {
  // console.log('--- watchGetQuestion')
  yield takeLatest(GET_QUESTION_REQUEST, handleGetQuestion);
}


function* handleGetValidatePhone(action) {
  // console.log('--- handleGetForgotPin action', action)
  
  const response = yield call(getValidatePhone, action.payload);
  
  if (response.ok) {
    yield put(getValidatePhoneSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getValidatePhoneFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getValidatePhoneFail(response.problem));
    }
  }
}

function* handleGetSignUpOtp(action) {
  // console.log('--- handleGetSignUpOtp action', action)
  
  const response = yield call(getSignUpOtp, action.payload);
  
  if (response.ok) {
    yield put(getSignUpOtpSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getSignUpOtpFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getSignUpOtpFail(response.problem));
    }
  }
}

function* handleGetRegister(action) {
  // console.log('--- handleGetRegister action', action)
  
  const response = yield call(getRegister, action.payload);
  
  if (response.ok) {
    yield put(getRegisterSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getRegisterFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getRegisterFail(response.problem));
    }
  }
}

function* handleGetCheckBalance(action) {
  // console.log('--- handleGetCheckBalance action', action)
  
  const response = yield call(getCheckBalance, action.payload);
  
  if (response.ok) {
    yield put(getCheckBalanceSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getCheckBalanceFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getCheckBalanceFail(response.problem));
    }
  }
}

function* handleGetCheckTransaction(action) {
  // console.log('--- handleGetCheckTransaction action', action)
  
  const response = yield call(getCheckTransaction, action.payload);
  
  if (response.ok) {
    yield put(getCheckTransactionSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getCheckTransactionFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getCheckTransactionFail(response.problem));
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

function* handleGetQuestion(action) {
  // console.log('--- handleGetQuestion action', action)
  
  const response = yield call(getQuestion, action.payload);
  
  if (response.ok) {
    yield put(getQuestionSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getQuestionFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getQuestionFail(response.problem));
    }
  }
}
