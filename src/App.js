import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployeeContainer from "./containers/AddEmployeeContainer";
import DeleteEmployeeContainer from "./containers/DeleteEmployeeContainer";
import EmployeeRecordContainer from "./containers/EmployeeRecordContainer";
import UpdateEmployeeContainer from "./containers/UpdateEmployeeContainer";
import Footer from "./components/Navigation/Footer";
import "./App.css";

/**
 * The main component of a React application.
 * Sets up routing for different pages and renders the appropriate components based on the current URL.
 *
 * @returns {JSX.Element} The JSX code that represents the structure of the application.
 */
function App() {
  return (
    <div className="ui container">
      <Router>
        <section className="routed-content-section">
          <Routes>
            <Route path="/" exact element={<EmployeeRecordContainer />} />
            <Route
              path="/employees/show"
              exact
              element={<EmployeeRecordContainer />}
            />
            <Route
              path="/employees/new"
              exact
              element={<AddEmployeeContainer />}
            />
            <Route
              path="/employees/edit/:id"
              exact
              element={<UpdateEmployeeContainer />}
            />
            <Route
              path="/employees/delete/:id"
              exact
              element={<DeleteEmployeeContainer />}
            />
          </Routes>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
