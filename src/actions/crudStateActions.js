import {
  CREATE_SUCCESS,
  CREATE_FAILURE,
  RESET_STATE,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  DELETE_SUCCESS,
  DELETE_FAILURE,
} from "../utils/actionType";

export const createEmpSuccess = (bSuccess) => ({
  type: CREATE_SUCCESS,
  payload: bSuccess,
});

export const createEmpFailure = (bFailure) => ({
  type: CREATE_FAILURE,
  payload: bFailure,
});

export const updateEmpDataSuccess = (bSuccess) => ({
  type: UPDATE_SUCCESS,
  payload: bSuccess,
});

export const updateEmpDataFailure = (bFailure) => ({
  type: UPDATE_FAILURE,
  payload: bFailure,
});

export const deleteEmpDataSuccess = (bSuccess) => ({
  type: DELETE_SUCCESS,
  payload: bSuccess,
});
export const deleteEmpDataFailure = (bFailure) => ({
  type: DELETE_FAILURE,
  payload: bFailure,
});

export const resetState = () => ({
  type: RESET_STATE,
});
