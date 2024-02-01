import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchEmpRecordSuccess,
  fetchEmpRecordFailure,
  fetchEmpRecordsFailure,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  fetchEmpRecordsSuccess,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
} from "../actions/employeeActions";
import employees from "../api/employees";
import {
  createEmpSuccess,
  createEmpFailure,
  updateEmpDataSuccess,
  updateEmpDataFailure,
} from "../actions/crudStateActions";

function* fetchEmpSaga(action) {
  try {
    // Simulating API call using axios
    const response = yield call(
      employees.get,
      `/employees/?id=${action.payload.id}`
    );
    const emp = response.data[0];

    yield put(fetchEmpRecordSuccess(emp));
  } catch (error) {
    yield put(fetchEmpRecordFailure(error.message));
  }
}

function* fetchEmpsSaga(action) {
  try {
    const response = yield call(employees.get, "/employees");
    const emps = response.data;
    yield put(fetchEmpRecordsSuccess(emps));
  } catch (error) {
    yield put(fetchEmpRecordsFailure(error.message));
  }
}

function* deleteEmpSaga(action) {
  try {
    const response = yield call(
      employees.delete,
      `/employees/${action.payload.id}`
    );
    const { config, data, headers, request, ...resTrimmed } = response;
    const id = action.payload.id;
    const deleted = { ...resTrimmed, id };
    yield put(deleteEmployeeSuccess(deleted));
  } catch (error) {
    yield put(deleteEmployeeFailure(error.response.statusText));
  }
}

function* updateEmpSaga(action) {
  const { id, eName, dptName } = action.payload;
  try {
    const response = yield call(employees.patch, `/employees/${id}`, {
      eName,
      dptName,
    });
    const emp = response.data;
    yield put(updateEmployeeSuccess(emp));
    yield put(updateEmpDataSuccess(true));
  } catch (error) {
    yield put(updateEmployeeFailure(error.message));
    yield put(updateEmpDataFailure(true));
  }
}

function* createEmpSaga(action) {
  const { eName, dptName } = action.payload.emp;
  try {
    const response = yield call(employees.post, "/employees", {
      eName,
      dptName,
    });
    const emp = response.data;
    yield put(fetchEmpRecordSuccess(emp));
    yield put(createEmpSuccess(true));
  } catch (error) {
    yield put(fetchEmpRecordFailure(error.message));
    yield put(createEmpFailure(true));
  }
}

function* empSaga() {
  yield takeEvery("FETCH_EMP_REQUEST", fetchEmpSaga);
  yield takeEvery("FETCH_EMPS_REQUEST", fetchEmpsSaga);
  yield takeEvery("DELETE_EMP_REQUEST", deleteEmpSaga);
  yield takeEvery("UPDATE_EMP_REQUEST", updateEmpSaga);
  yield takeEvery("CREATE_EMP_REQUEST", createEmpSaga);
}

export default empSaga;
