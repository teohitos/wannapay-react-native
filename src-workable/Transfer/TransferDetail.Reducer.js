import {
  GET_CHECKTRANSACTIONPHONE_FAIL,
  GET_CHECKTRANSACTIONPHONE_REQUEST,
  GET_CHECKTRANSACTIONPHONE_SUCCESS,
  
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
