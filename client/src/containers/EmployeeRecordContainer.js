import { connect } from "react-redux";
import { useEffect } from "react";
import EmployeeTable from "../components/EmployeeRecord/EmployeeTable";
import { fetchEmpRecords } from "../actions/employeeActions";
import { resetState } from "../actions/crudStateActions";
const EmployeeRecordContainer = ({
  employees,
  fetchEmpRecords,
  resetState,
}) => {
  useEffect(() => {
    fetchEmpRecords();
    resetState();
  }, [fetchEmpRecords, resetState]);
  return <EmployeeTable empData={employees} />;
};
const mapStateToProps = (state) => {
  return { employees: state.employees };
};
export default connect(mapStateToProps, { fetchEmpRecords, resetState })(
  EmployeeRecordContainer
);
