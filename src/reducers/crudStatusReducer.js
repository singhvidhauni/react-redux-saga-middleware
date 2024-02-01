import {
  CREATE_SUCCESS,
  CREATE_FAILURE,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  RESET_STATE,
} from "./../utils/actionType";

const initialState = {
  isSuccess: false,
  isFailure: false,
};
const crudStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SUCCESS:
      return {
        ...state,
        isSuccess: action.payload,
      };

    case CREATE_FAILURE:
      return {
        ...state,
        isFailure: true,
      };

    case RESET_STATE:
      return {
        ...state,
        isSuccess: false,
        isFailure: false,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isSuccess: false,
        isFailure: false,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isSuccess: false,
        isFailure: false,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isFailure: false,
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        isSuccess: false,
        isFailure: true,
      };

    case DELETE_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isFailure: false,
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isSuccess: false,
        isFailure: true,
      };

    default:
      return state;
  }
};
export default crudStatusReducer;
