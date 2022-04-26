import {
  GET_CHECKTRANSACTIONPHONE_FAIL,
  GET_CHECKTRANSACTIONPHONE_REQUEST,
  GET_CHECKTRANSACTIONPHONE_SUCCESS,
  GET_VERIFYPIN_FAIL,
  GET_VERIFYPIN_REQUEST,
  GET_VERIFYPIN_SUCCESS,
  
  GET_TRANSFER_FAIL,
  GET_TRANSFER_REQUEST,
  GET_TRANSFER_SUCCESS,
  
} from './Transfer.Action';

const initialState = {fetching: false, data: null, err: null};

export const getCheckTransactionPhone = (state = initialState, action) => {
// console.log('---- getCheckTransactionPhone action', action);

  switch (action.type) {
    case GET_CHECKTRANSACTIONPHONE_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_CHECKTRANSACTIONPHONE_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_CHECKTRANSACTIONPHONE_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
      
    default:
      return state;
  }
};

export const getVerifyPin = (state = initialState, action) => {
  // console.log('---- getVerifyPin action', action);
  
    switch (action.type) {
      case GET_VERIFYPIN_REQUEST:
        return {
          fetching: true,
          data: null,
          err: null,
        };
  
      case GET_VERIFYPIN_SUCCESS:
        return {
          fetching: false,
          data: action.payload.data,
          err: null,
        };
  
      case GET_VERIFYPIN_FAIL:
        return {
          fetching: false,
          data: null,
          err: action.payload.err,
        };
        
      default:
        return state;
    }
  };

export const getTransfer = (state = initialState, action) => {
  // console.log('---- getTransfer action', action);
  
    switch (action.type) {
      case GET_TRANSFER_REQUEST:
        return {
          fetching: true,
          data: null,
          err: null,
        };
  
      case GET_TRANSFER_SUCCESS:
        return {
          fetching: false,
          data: action.payload.data,
          err: null,
        };
  
      case GET_TRANSFER_FAIL:
        return {
          fetching: false,
          data: null,
          err: action.payload.err,
        };
        
      default:
        return state;
    }
  };
