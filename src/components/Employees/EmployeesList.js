import React, { useCallback, useMemo, useState } from "react";

import DataTable from "../table/DataTable";
import useEmployees from "../../hooks/useEmployees";
import EmployeeModal from "../modals/EmployeeModal";

import { initialActions } from "../../util/data/actions";
import { getColumns } from "../../util/helpers/getColumns";
import { DELETE, UPDATE } from "../../util/data/actionTypes";

import "../../style/Employees.css";

const EmployeesList = () => {
  const { employees } = useEmployees();
  const [empId, setEmpId] = useState(null);
  const [actions, setActions] = useState(initialActions);

  const handleAction = useCallback(
    (action, id) => {
      setEmpId(id);
      switch (action) {
        case DELETE:
          setActions({ ...actions, delete: true });
          break;
        case UPDATE:
          setActions({ ...actions, update: true });
          break;
        default:
          setActions(initialActions);
      }
    },
    [actions]
  );

  const onEditEmployee = useMemo(
    () => employees.find((data) => data.id === empId),
    [empId, employees]
  );
  
  const columns = useMemo(() => getColumns(employees), [employees]);

  const finalColumns = useMemo(
    () => [
      ...columns,
      {
        Header: "Actions",
        Cell: ({ row }) => {
          return (
            <div className="table-btns">
              <button
                onClick={(e) =>
                  handleAction(e.target.innerText, row.original.id)
                }
              >
                Delete
              </button>
              <button
                onClick={(e) =>
                  handleAction(e.target.innerText, row.original.id)
                }
              >
                Update
              </button>
            </div>
          );
        },
      },
    ],
    [columns, handleAction]
  );

  return (
    <>
      <div className="employees-list">
        {employees && (
          <DataTable columns={finalColumns} data={employees} />
        )}
        <EmployeeModal
          empId={empId}
          actions={actions}
          setActions={setActions}
          onEditEmployee={onEditEmployee}
        />
      </div>
    </>
  );
};

export default EmployeesList;
