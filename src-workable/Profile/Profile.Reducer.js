import {
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
} from './Profile.Action';

const initialState = {fetching: false, data: null, err: null};

export const getProfile = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      // console.log('---- GET_PROFILE_REQUEST')

      return {
        fetching: true,
        data: null,
        err: null,
      };

      case GET_PROFILE_SUCCESS:
      // console.log('---- GET_PROFILE_SUCCESS')
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };

      case GET_PROFILE_FAIL:
        // console.log('---- GET_PROFILE_FAIL')
        return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
