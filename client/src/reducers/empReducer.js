import {
  CREATE_EMP_SUCCESS,
  CREATE_EMP_FAILURE,
  FETCH_EMP_SUCCESS,
  FETCH_EMP_FAILURE,
  FETCH_EMPS_SUCCESS,
  FETCH_EMPS_FAILURE,
  UPDATE_EMP_SUCCESS,
  UPDATE_EMP_FAILURE,
  DELETE_EMP_SUCCESS,
  DELETE_EMP_FAILURE,
} from "../utils/actionType";
const initialState = {
  employees: [],
  error: null,
};
const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EMP_SUCCESS:
    case UPDATE_EMP_SUCCESS:
    case FETCH_EMP_SUCCESS:
      return {
        ...state,
        employees: {
          ...state.employees,
          [action.payload.id]: action.payload,
        },
        loading: false,
        error: null,
      };
    case FETCH_EMPS_SUCCESS:
      return {
        ...state,
        employees: action.payload.emps,
        loading: false,
        error: null,
      };
    case FETCH_EMPS_FAILURE:
      return {
        ...state,
        employees: { ...state.employees },
        loading: false,
        error: action.payload,
      };
    case CREATE_EMP_FAILURE:
    case UPDATE_EMP_FAILURE:
    case FETCH_EMP_FAILURE:
      return {
        ...state,
        employees: { ...state.employees },
        loading: false,
        error: action.payload,
      };

    case DELETE_EMP_SUCCESS:
      const { [action.payload.id]: removeEmployee, ...remainingEmployees } =
        state.employees;
      return {
        ...state,
        employees: remainingEmployees,
        ...action.payload,
        loading: false,
        error: null,
      };
    case DELETE_EMP_FAILURE:
      const { status, statusText, ...newState } = state;
      return {
        ...newState,
        employees: { ...state.employees },
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default empReducer;
