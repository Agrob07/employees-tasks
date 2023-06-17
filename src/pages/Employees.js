import React from "react";
import "../style/Employees.css";
import EmployeesList from "../components/Employees/EmployeesList";
import AddEmployee from "../components/Employees/AddEmployee";
import useEmployees from "../hooks/useEmployees";

const Employees = () => {
  const { employees } = useEmployees();

  return (
    <div className="wrapper">
      <AddEmployee />
      {!!employees.length && <EmployeesList />}
    </div>
  );
};

export default Employees;
