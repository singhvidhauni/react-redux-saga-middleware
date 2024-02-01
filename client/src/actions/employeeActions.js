import {
  FETCH_EMP_REQUEST,
  FETCH_EMP_SUCCESS,
  FETCH_EMP_FAILURE,
  FETCH_EMPS_REQUEST,
  FETCH_EMPS_SUCCESS,
  FETCH_EMPS_FAILURE,
  DELETE_EMP_REQUEST,
  DELETE_EMP_SUCCESS,
  DELETE_EMP_FAILURE,
  UPDATE_EMP_REQUEST,
  UPDATE_EMP_SUCCESS,
  UPDATE_EMP_FAILURE,
  CREATE_EMP_REQUEST,
} from "./../utils/actionType";

export const createEmp = (emp) => ({
  type: CREATE_EMP_REQUEST,
  payload: { emp },
});

export const fetchEmpRecordsSuccess = (emps) => ({
  type: FETCH_EMPS_SUCCESS,
  payload: { emps },
});
export const fetchEmpRecord = (id) => ({
  type: FETCH_EMP_REQUEST,
  payload: { id },
});
export const fetchEmpRecords = (emps) => ({
  type: FETCH_EMPS_REQUEST,
  payload: { emps },
});
export const fetchEmpRecordsFailure = (error) => ({
  type: FETCH_EMPS_FAILURE,
  payload: { error },
});

export const fetchEmpRecordSuccess = (emp) => ({
  type: FETCH_EMP_SUCCESS,
  payload: emp,
});
export const fetchEmpRecordFailure = (error) => ({
  type: FETCH_EMP_FAILURE,
  payload: { error },
});
export const updateEmployee = ({ id, eName, dptName }) => ({
  type: UPDATE_EMP_REQUEST,
  payload: { id, eName, dptName },
});

export const updateEmployeeSuccess = ({ id, eName, dptName }) => ({
  type: UPDATE_EMP_SUCCESS,
  payload: { id, eName, dptName },
});

export const updateEmployeeFailure = (error) => ({
  type: UPDATE_EMP_FAILURE,
  payload: { error },
});

export const deleteEmployeeSuccess = (delEmp) => ({
  type: DELETE_EMP_SUCCESS,
  payload: delEmp,
});
export const deleteEmployeeFailure = (error) => ({
  type: DELETE_EMP_FAILURE,
  payload: error,
});
export const deleteEmployee = (id) => ({
  type: DELETE_EMP_REQUEST,
  payload: { id },
});
