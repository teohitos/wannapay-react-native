import {
  GET_CHECKPHONE_FAIL,
  GET_CHECKPHONE_REQUEST,
  GET_CHECKPHONE_SUCCESS,

  GET_FORGOTPINOTP_FAIL,
  GET_FORGOTPINOTP_REQUEST,
  GET_FORGOTPINOTP_SUCCESS,
    
  GET_FORGOTPINQUESTION_FAIL,
  GET_FORGOTPINQUESTION_REQUEST,
  GET_FORGOTPINQUESTION_SUCCESS,
 
  GET_FORGOTPINVERIFYIDENTITY_FAIL,
  GET_FORGOTPINVERIFYIDENTITY_CLEAR,
  GET_FORGOTPINVERIFYIDENTITY_REQUEST,
  GET_FORGOTPINVERIFYIDENTITY_SUCCESS,

    GET_FORGOTPINVERIFYQUESTION_FAIL,
    GET_FORGOTPINVERIFYQUESTION_REQUEST,
    GET_FORGOTPINVERIFYQUESTION_SUCCESS,

    GET_FORGOTPIN_FAIL,
    GET_FORGOTPIN_REQUEST,
    GET_FORGOTPIN_SUCCESS,
  
} from './ForgotPIN.Action';

const initialState = {fetching: false, data: null, err: null};

export const getCheckPhone = (state = initialState, action) => {

  switch (action.type) {
    case GET_CHECKPHONE_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_CHECKPHONE_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_CHECKPHONE_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
      
    default:
      return state;
  }
};

export const getForgotPinOtp = (state = initialState, action) => {
  // console.log('---- getForgotPinOtp action', action);

  switch (action.type) {
    case GET_FORGOTPINOTP_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_FORGOTPINOTP_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_FORGOTPINOTP_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
      
    default:
      return state;
  }
};

export const getForgotPinQuestion = (state = initialState, action) => {
  // console.log('---- getForgotPinQuestion action', action);

  switch (action.type) {
    case GET_FORGOTPINQUESTION_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_FORGOTPINQUESTION_SUCCESS:
      let iosdata = ['Cancel'];
      let androiddata = [{value: 0, label: 'Please Select Question'}]
      
      action.payload.data.data.map((item, key) => {
        iosdata.push(item.label)
        androiddata.push(item)
      })

      action.payload.data.data = androiddata;
      
      // console.log('--- androiddata',androiddata)
      // console.log('--- iosdata',iosdata)
      
      //add data for ios
      action.payload.data = {...action.payload.data,iosdata}
      
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_FORGOTPINQUESTION_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
      
    default:
      return state;
  }
};

export const getForgotPinVerifyIdentity = (state = initialState, action) => {
  // console.log('---- getForgotPinVerifyIdentity action', action);

  switch (action.type) {
    case GET_FORGOTPINVERIFYIDENTITY_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_FORGOTPINVERIFYIDENTITY_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_FORGOTPINVERIFYIDENTITY_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };

    case GET_FORGOTPINVERIFYIDENTITY_CLEAR:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
      
  
    default:
      return state;
  }
};

export const getForgotPinVerifyQuestion = (state = initialState, action) => {
  // console.log('---- getForgotPinVerifyQuestion action', action);

  switch (action.type) {
    case GET_FORGOTPINVERIFYQUESTION_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_FORGOTPINVERIFYQUESTION_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_FORGOTPINVERIFYQUESTION_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
  
    default:
      return state;
  }
};

export const getForgotPin = (state = initialState, action) => {
  // console.log('---- getForgotPin action', action);

  switch (action.type) {
    case GET_FORGOTPIN_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_FORGOTPIN_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_FORGOTPIN_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };

    default:
      return state;
  }
};
