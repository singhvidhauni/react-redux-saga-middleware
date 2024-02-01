import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchEmpRecord, updateEmployee } from "../actions/employeeActions";
import { connect } from "react-redux";
const UpdateEmployeeContainer = ({
  fetchEmpRecord,
  updateEmployee,
  employees,
  updateSuccess,
}) => {
  const navigate = useNavigate();
  const [eName, setEName] = useState("");
  const [dptName, setDptName] = useState("");
  const [id, setId] = useState("");
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showRecordToUpdate] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const { eName: newEName, dptName: newDptName } =
      employees.employees[id] || {};
    //the above destructure access the value of eName, dptName from the employee fetched with
    //provided id if it finds any otherwise assigns ""
    if (newEName !== undefined) {
      setEName(newEName || "");
    }
    if (newDptName !== undefined) {
      setDptName(newDptName || "");
    }

    if (employees.error) {
      setShowUpdateForm(false);
      setShowErrorMessage(true);
    }
  }, [employees, setEName, setDptName, id]);

  useEffect(() => {
    if (updateSuccess) {
      navigate("/");
    }
  }, [updateSuccess, navigate]);
  const handleFetching = (e) => {
    e.preventDefault();
    fetchEmpRecord(id);
    setShowUpdateForm(true);
  };

  const handleSubmitUpdatedRec = (e) => {
    e.preventDefault();
    updateEmployee({ id, eName, dptName });
  };
  const handleInputChange = (e) => {
    setId(e.target.value);
    setShowErrorMessage(false);
  };

  return (
    <div className="update-emp-form">
      {employees.error && showErrorMessage && (
        <div className="ui message">
          <h3>Update record</h3>
          <div className="header">Access Error</div>
          <p>{`The record with id-${id} couldn't be found`}</p>
        </div>
      )}
      {showRecordToUpdate && (
        <form className="ui form" onSubmit={(e) => handleFetching(e)}>
          <div className="field">
            <label>
              please enter the Id of the record to update.
              <input type="text" onChange={(e) => handleInputChange(e)} />
            </label>
          </div>
          <button className="ui secondary button">Submit</button>
        </form>
      )}
      <div className="ui hidden divider">
        {showUpdateForm && (
          <form className="ui form" onSubmit={(e) => handleSubmitUpdatedRec(e)}>
            <div className="field">
              <label>
                Name
                <input
                  type="text"
                  value={eName || ""}
                  onChange={(e) => setEName(e.target.value)}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Department
                <input
                  type="text"
                  value={dptName || ""}
                  onChange={(e) => setDptName(e.target.value)}
                />
              </label>
            </div>
            <button className="ui secondary button">Update</button>
          </form>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
    updateSuccess: state.crudStatus.isSuccess,
  };
};
export default connect(mapStateToProps, {
  fetchEmpRecord,
  updateEmployee,
})(UpdateEmployeeContainer);
