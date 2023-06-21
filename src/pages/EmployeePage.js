import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  fetchUserById,
  selectEmployee,
  selectEmployeeStatus,
} from "../redux/slice/employeeSlice";
import {
  fetchTasksById,
  selectEmployeeTasks,
  selectEmployeeTaskStatus,
} from "../redux/slice/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { getColumns } from "../util/helpers/getColumns";
import DataTable from "../components/table/DataTable";

const EmployeePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const employee = useSelector(selectEmployee);
  const employeeStatus = useSelector(selectEmployeeStatus);
  const tasks = useSelector(selectEmployeeTasks);
  const tasksStatus = useSelector(selectEmployeeTaskStatus);

  useEffect(() => {
    dispatch(fetchUserById(id));
    dispatch(fetchTasksById(id));
  }, [dispatch, id]);

  const columns = useMemo(
    () => (tasks.length ? getColumns(tasks) : []),
    [tasks]
  );
  return (
    <div>
      {employeeStatus === "loading" ? (
        <span>Loading...</span>
      ) : (
        <div
          style={{
            display: "flex",
            flexFlow: "column wrap",
            gap: "1rem",
          }}
        >
          {employee ? (
            Object.keys(employee).map((key, idx) => (
              <span key={idx}>
                {key.toUpperCase()}: {employee[key]}
              </span>
            ))
          ) : (
            <span style={{ color: "red" }}>
              No such an employee yet, but he/she already could have
              tasks <span>":)"</span>
            </span>
          )}

          {columns.length ? (
            <DataTable columns={columns} data={tasks} />
          ) : (
            <span style={{ color: "red" }}>
              No tasks yet for this employee
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default EmployeePage;
