import React from "react";

import EmployeesList from "../components/Employees/EmployeesList";
import AddEmployee from "../components/Employees/AddEmployee";

import pageStyle from "../style/page.module.css";

const Employees = () => {
  return (
    <div className={`${pageStyle.page} ${pageStyle.employeesPage}`}>
      <AddEmployee />
      <EmployeesList />
    </div>
  );
};

export default Employees;
