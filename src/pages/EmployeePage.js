import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchUserById,
  selectEmployee,
  selectEmployeeStatus,
} from "../redux/slice/employeeSlice";
import {
  fetchTasksById,
  selectEmployeeTasks,
} from "../redux/slice/tasksSlice";
import { getColumns } from "../util/helpers/getColumns";
import DataTable from "../components/table/DataTable";

import pageStyle from "../style/page.module.css";
import employeeStyle from "../style/employee.module.css";

const EmployeePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const employee = useSelector(selectEmployee);
  const employeeStatus = useSelector(selectEmployeeStatus);
  const tasks = useSelector(selectEmployeeTasks);

  useEffect(() => {
    dispatch(fetchUserById(id));
    dispatch(fetchTasksById(id));
  }, [dispatch, id]);

  const columns = useMemo(
    () => (tasks.length ? getColumns(tasks) : []),
    [tasks]
  );
  return (
    <div
      className={`${pageStyle.page} ${pageStyle.singleEmployeePage}`}
    >
      {employeeStatus === "loading" ? (
        <span>Loading...</span>
      ) : (
        <div className={employeeStyle.info}>
          <span className={employeeStyle.heading}>
            Employee Details
          </span>
          <div className={employeeStyle.infoItems}>
            {employee ? (
              Object.keys(employee).map((key, idx) => (
                <span key={idx}>
                  {key.toUpperCase()}: {employee[key]}
                </span>
              ))
            ) : (
              <span>
                No such an employee yet, but he/she already could have
                tasks
              </span>
            )}
          </div>
        </div>
      )}
      {columns.length ? (
        <div className={employeeStyle.listContainer}>
          <DataTable columns={columns} data={tasks} />
        </div>
      ) : (
        <span style={{ color: "red" }}>
          No tasks yet for this employee
        </span>
      )}
    </div>
  );
};

export default EmployeePage;
