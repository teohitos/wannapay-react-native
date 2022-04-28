import {call, put, takeLatest} from 'redux-saga/effects';
import {  
  // REDUX - ADD METHOD
  getReloadFail,
  getReloadSuccess,
  GET_RELOAD_REQUEST,
} from './Reload.Action';

import {
  getReload  //REDUX - IMPORT API
} from '../api';

import {sendNetworkFail} from '../actions';

//REDUX
export function* watchGetReload() {
  // console.log('--- watchGetReload')
  yield takeLatest(GET_RELOAD_REQUEST, handleGetReload);
}

//REDUX
function* handleGetReload(action) {
  // console.log('--- handleGetReload action', action)
  
  const response = yield call(getReload, action.payload);
  
  if (response.ok) {
    yield put(getReloadSuccess(response.data));
    
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getReloadFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getReloadFail(response.problem));
    }
  }
}
