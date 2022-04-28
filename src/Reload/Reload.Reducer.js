import {
  // REDUX - ADD REDUCER
  GET_RELOAD_FAIL,
  GET_RELOAD_REQUEST,
  GET_RELOAD_SUCCESS,
  
} from './Reload.Action';

const initialState = {fetching: false, data: null, err: null};

// REDUX - ADD REDUCER
export const getReload = (state = initialState, action) => {
  // console.log('---- getReload action', action);
  
    switch (action.type) {
      case GET_RELOAD_REQUEST:
        return {
          fetching: true,
          data: null,
          err: null,
        };
  
      case GET_RELOAD_SUCCESS:
        return {
          fetching: false,
          data: action.payload.data,
          err: null,
        };
  
      case GET_RELOAD_FAIL:
        return {
          fetching: false,
          data: null,
          err: action.payload.err,
        };
        
      default:
        return state;
    }
  };
