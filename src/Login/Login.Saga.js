import {call, put, takeLatest} from 'redux-saga/effects';
import {
  getLoginFail,
  getLoginSuccess,
  GET_LOGIN_REQUEST,
} from './Login.Action';
import {getLogin} from '../api';
import {sendNetworkFail} from '../actions';

export function* watchGetLogin() {
  // console.log('--- watchGetLogin')
  yield takeLatest(GET_LOGIN_REQUEST, handleGetLogin);
}

function* handleGetLogin(action) {
  // console.log('--- handleGetLogin action', action)
  
  const phone = action.payload.data.phone;
  
  const response = yield call(getLogin, action.payload);
  // console.log('---- handleGetLogin response', response)

  if (response.ok) {
    response.data.phone = phone;
    yield put(getLoginSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getLoginFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getLoginFail(response.problem));
    }
  }
}
