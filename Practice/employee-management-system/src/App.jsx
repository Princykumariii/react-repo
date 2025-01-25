import React, { useEffect, useState } from "react";
import axios from "axios";
import AddEmployeeForm from "./Components/AddEmployeeForm.jsx";
import EmployeeTable from "./Components/EmployeeTable.jsx";
import FilterDropdown from "./Components/FilterDropDown.jsx";
import "./App.jsx";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employees");
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  useEffect(() => {
    if (filter) {
      setFilteredEmployees(employees.filter((emp) => emp.department === filter));
    } else {
      setFilteredEmployees(employees);
    }
  }, [filter, employees]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  

  return (
    <div className="app">
      <h1>Employee Management System</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Add Employee Form" : "Add Employee"}
      </button>
      {showForm && <AddEmployeeForm  />}
      <FilterDropdown/>
      <EmployeeTable/>
      
    </div>
  );
};

export default App;
