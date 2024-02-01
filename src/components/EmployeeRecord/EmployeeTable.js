import Spinner from "../utils/Spinner";
import { v4 as uuidv4 } from "uuid";
import "./../../styles/employeeTable.css";
const EmployeeTable = ({ empData }) => {
  const { employees } = empData;
  if (!employees) return null;

  const renderRecord = () => {
    const emps = Object.values(employees);
    return emps.map(
      (emp, index) =>
        emp && (
          <tr key={uuidv4()}>
            <td>{emp.id}</td>
            <td>{emp.eName}</td>
            <td>{emp.dptName}</td>
          </tr>
        )
    );
  };

  if (employees.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div>
        <h3>Employee Records</h3>
        <div className="ui container employee-table">
          <section className="section-content">
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>{renderRecord()}</tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
};
export default EmployeeTable;
