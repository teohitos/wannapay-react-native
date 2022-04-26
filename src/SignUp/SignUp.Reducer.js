import {
    GET_VALIDATEPHONE_FAIL,
    GET_VALIDATEPHONE_REQUEST,
    GET_VALIDATEPHONE_SUCCESS,

    GET_SIGNUPOTP_FAIL,
    GET_SIGNUPOTP_REQUEST,
    GET_SIGNUPOTP_SUCCESS,
    
    GET_REGISTER_FAIL,
    GET_REGISTER_REQUEST,
    GET_REGISTER_SUCCESS,
    
    GET_CHECKBALANCE_FAIL,
    GET_CHECKBALANCE_REQUEST,
    GET_CHECKBALANCE_SUCCESS,
    
    GET_CHECKTRANSACTION_FAIL,
    GET_CHECKTRANSACTION_REQUEST,
    GET_CHECKTRANSACTION_SUCCESS,
    
    GET_QUESTION_FAIL,
    GET_QUESTION_REQUEST,
    GET_QUESTION_SUCCESS,

} from './SignUp.Action';

const initialState = {fetching: false, data: null, err: null};

export const getValidatePhone = (state = initialState, action) => {
  // console.log('---- getValidatePhone action', action);

  switch (action.type) {
    case GET_VALIDATEPHONE_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_VALIDATEPHONE_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_VALIDATEPHONE_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };

    default:
      return state;
  }
};

export const getSignUpOtp = (state = initialState, action) => {
  // console.log('---- getSignUpOtp action', action);

  switch (action.type) {
    case GET_SIGNUPOTP_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_SIGNUPOTP_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_SIGNUPOTP_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
      
    default:
      return state;
  }
};

export const getRegister = (state = initialState, action) => {
  // console.log('---- getRegister action', action);

  switch (action.type) {
    case GET_REGISTER_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_REGISTER_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_REGISTER_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
      
    default:
      return state;
  }
};

export const getCheckBalance = (state = initialState, action) => {
  // console.log('---- getCheckBalance action', action);

  switch (action.type) {
    case GET_CHECKBALANCE_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_CHECKBALANCE_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_CHECKBALANCE_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
      
    default:
      return state;
  }
};

export const getCheckTransaction = (state = initialState, action) => {
  // console.log('---- getCheckTransaction action', action);

  switch (action.type) {
    case GET_CHECKTRANSACTION_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_CHECKTRANSACTION_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_CHECKTRANSACTION_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
      
    default:
      return state;
  }
};

  export const getQuestion = (state = initialState, action) => {
    // console.log('---- getQuestion action', action);
    
      switch (action.type) {
        case GET_QUESTION_REQUEST:
          return {
            fetching: true,
            data: null,
            err: null,
          };
    
        case GET_QUESTION_SUCCESS:
          return {
            fetching: false,
            data: action.payload.data,
            err: null,
          };
    
        case GET_QUESTION_FAIL:
          return {
            fetching: false,
            data: null,
            err: action.payload.err,
          };
          
        default:
          return state;
      }
    };