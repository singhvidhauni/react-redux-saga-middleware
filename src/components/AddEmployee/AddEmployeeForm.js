import { useState } from "react";

const AddEmployeeForm = ({ onSubmit }) => {
  const [eName, setEName] = useState("");
  const [dptName, setDptName] = useState("");
  const bFilled = eName.length !== 0 && dptName.length !== 0 ? false : true;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ eName, dptName });
  };
  return (
    <div>
      <h3>Add Employee Form</h3>
      <div className="add-employee-outline">
        <form className="ui form" onSubmit={(e) => handleSubmit(e)}>
          <div className="field">
            <label>
              Name
              <input
                type="text"
                value={eName}
                onChange={(e) => setEName(e.target.value)}
              />
            </label>
          </div>
          <div className="field">
            <label>
              Department
              <input
                type="text"
                value={dptName}
                onChange={(e) => setDptName(e.target.value)}
              />
            </label>
          </div>
          <button
            className="ui secondary button"
            disabled={bFilled ? true : false}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddEmployeeForm;
