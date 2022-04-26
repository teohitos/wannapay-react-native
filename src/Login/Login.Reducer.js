import {
  GET_LOGIN_FAIL,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGOUT_REQUEST
} from './Login.Action';

const initialState = {fetching: false, data: null, err: null};

export const getLogin = (state = initialState, action) => {
  // console.log('---- getLogin action', action);

  switch (action.type) {
    case GET_LOGIN_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };

    case GET_LOGIN_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

    case GET_LOGIN_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
      
    default:
      return state;
  }
};

export const getLogout = (state = initialState, action) => {
  console.log('---- getLogout action', action);

  switch (action.type) {
    case GET_LOGOUT_REQUEST:
      return {
        fetching: true,
        data: {success: true},
        err: null,
      };

    default:
      return state;
  }
};

