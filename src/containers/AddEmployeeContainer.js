import AddEmployeeForm from "../components/AddEmployee/AddEmployeeForm";
import { connect } from "react-redux";
import { createEmp } from "../actions/employeeActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddEmployeeContainer = ({ addSuccess, createEmp }) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (addSuccess) {
      navigate("/");
    }
  }, [addSuccess, navigate]);

  const onSubmit = (employeeData) => {
    //call to action creator
    createEmp(employeeData);
  };
  return <AddEmployeeForm onSubmit={onSubmit} />;
};
const mapStateToProps = (state) => {
  return {
    addSuccess: state.crudStatus.isSuccess,
  };
};
export default connect(mapStateToProps, { createEmp })(AddEmployeeContainer);
