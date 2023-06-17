import React, { useState } from "react";
import EmployeeModal from "../modals/EmployeeModal";
import { initialActions } from "../../util/data/actions";

const AddEmployee = () => {
  const [actions, setActions] = useState(initialActions);

  return (
    <div className="add-employees">
      <div className="btn-group">
        <button
          className="btn"
          onClick={() => {
            setActions({ ...initialActions, create: true });
          }}
        >
          Add Employees
        </button>
      </div>
      <EmployeeModal
        actions={actions}
        setActions={setActions}
      />
    </div>
  );
};

export default AddEmployee;
