import React from "react";
import "../style/Employees.css";
import EmployeesList from "../components/Employees/EmployeesList";
import AddEmployee from "../components/Employees/AddEmployee";

const Employees = () => {
  return (
    <div className="wrapper">
      <AddEmployee />
      <EmployeesList />
    </div>
  );
};

export default Employees;
