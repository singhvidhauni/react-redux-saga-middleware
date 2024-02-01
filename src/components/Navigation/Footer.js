import { Link } from "react-router-dom";
import "./../../styles/footer.css";
const Footer = () => {
  return (
    <div className="ui compact menu inverted footer">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/employees/show" className="item">
        Show Employees
      </Link>
      <Link to="/employees/new" className="item">
        Add new Employee
      </Link>

      <Link to="/employees/edit/:id" className="item">
        Update Employees
      </Link>
      <Link to="/employees/delete/:id" className="item">
        Delete Employees
      </Link>
    </div>
  );
};
export default Footer;
