import {all} from 'redux-saga/effects';
import {watchGetLogin} from './Login/Login.Saga';

import {
  watchGetCheckPhone, 
  watchGetForgotPinOtp,
  watchGetForgotPinQuestion, 
  watchGetForgotPinVerifyIdentity,
  watchGetForgotPinVerifyQuestion,
  watchGetForgotPin,
} from './ForgotPIN/ForgotPIN.Saga';

import {
  watchGetValidatePhone,
  watchGetSignUpOtp,
  watchGetRegister,
  watchGetCheckBalance,
  watchGetCheckTransaction,
  watchGetQuestion,
} from './SignUp/SignUp.Saga';

import {
  watchGetCheckTransactionPhone,
  watchGetVerifyPin,
  watchGetTransfer,
} from './Transfer/Transfer.Saga';

import {
  // REDUX STEP 14 - ADD WATCH
  watchGetProfile,
} from './Profile/Profile.Saga';

import {watchGetFollower} from './Follower/Follower.Saga';

export default function* rootSaga() {
  yield all([
    watchGetLogin(), 
    watchGetCheckPhone(), 
    watchGetForgotPinOtp(), 
    watchGetForgotPinQuestion(), 
    watchGetForgotPinVerifyIdentity(),
    watchGetForgotPinVerifyQuestion(),
    watchGetForgotPin(),
    watchGetValidatePhone(),
    watchGetSignUpOtp(),
    watchGetRegister(),
    watchGetCheckBalance(),
    watchGetCheckTransaction(),
    watchGetCheckTransactionPhone(),
    watchGetVerifyPin(),
    watchGetTransfer(),
    watchGetQuestion(),

   // REDUX STEP 15 - EXPORT WATCH
   watchGetProfile(),

   watchGetFollower()
  ]);
}
