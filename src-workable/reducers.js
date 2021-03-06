import {combineReducers} from 'redux';

import {getLogin, getLogout} from './Login/Login.Reducer';

import {
  getCheckPhone, 
  getForgotPinOtp, 
  getForgotPinQuestion, 
  getForgotPinVerifyIdentity,
  getForgotPinVerifyQuestion,
  getForgotPin
} from './ForgotPIN/ForgotPIN.Reducer';

import {
  getValidatePhone,
  getSignUpOtp,
  getRegister,
  getCheckBalance,
  getCheckTransaction,
  getQuestion,

} from './SignUp/SignUp.Reducer';

import {
  getProfile
} from './Profile/Profile.Reducer';

import {
  // REDUX STEP ADD REDUCER
  getReload
} from './Reload/Reload.Reducer';

import {
  getCheckTransactionPhone,
  getVerifyPin,
  getTransfer,
} from './Transfer/Transfer.Reducer';

import {getFollower} from './Follower/Follower.Reducer';
import {CLEAR_NETWORK_FAIL, SEND_NETWORK_FAIL} from './actions';

const initialState = {fetching: false, data: null, err: null};

const sendNetworkFail = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NETWORK_FAIL:
      return {
        err: action.payload.err,
      };
    case CLEAR_NETWORK_FAIL:
      return {
        err: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sendNetworkFail, 
  getLogin, 
  getCheckPhone, 
  getForgotPinOtp, 
  getForgotPinQuestion, 
  getForgotPinVerifyIdentity,
  getForgotPinVerifyQuestion,
  getForgotPin,
  getValidatePhone,
  getSignUpOtp,
  getRegister,
  getCheckBalance,
  getCheckTransaction,
  getCheckTransactionPhone,
  getVerifyPin,
  getTransfer,
  getQuestion,
  getProfile, 
  getLogout,

  // REDUX - COMBINE REDUCER
  getReload,

  getFollower
});
export default rootReducer;
