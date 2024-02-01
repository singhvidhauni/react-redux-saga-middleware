import { combineReducers } from "redux";
import empReducer from "./empReducer";
import crudStatusReducer from "./crudStatusReducer";
export default combineReducers({
  employees: empReducer,
  crudStatus: crudStatusReducer,
});
