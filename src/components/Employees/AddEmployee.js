import React, { useState } from "react";

import EmployeeModal from "../modals/EmployeeModal";
import { initialActions } from "../../util/data/actions";

import employeesStyle from "../../style/employees.module.css";

const AddEmployee = () => {
  const [actions, setActions] = useState(initialActions);

  const handleAddClick = () => {
    setActions({ ...initialActions, create: true });
  };

  return (
    <div className={employeesStyle.addContainer}>
      <button
        className={employeesStyle.addBtn}
        onClick={handleAddClick}
      >
        Add Employees
      </button>
      <EmployeeModal actions={actions} setActions={setActions} />
    </div>
  );
};

export default AddEmployee;
