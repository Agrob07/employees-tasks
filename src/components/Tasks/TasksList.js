import React, { useLayoutEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DataTable from "../table/DataTable";
import TaskModal from "../modals/TaskModal";
import {
  fetchAllTasks,
  selectTaskStatus,
  selectTasks,
} from "../../redux/slice/tasksSlice";
import { getColumns } from "../../util/helpers/getColumns";
import { initialActions } from "../../util/data/actions";
import { TASKS } from "../../util/data/contentTypes";

import taskStyle from "../../style/tasks.module.css";

const TasksList = () => {
  const [actions, setActions] = useState(initialActions);
  const [onEditTask, setOnEditTask] = useState({});

  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const status = useSelector(selectTaskStatus);

  useLayoutEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  const columns = useMemo(
    () => (!!tasks.length ? getColumns(tasks, TASKS) : []),
    [tasks]
  );

  const finalColumns = useMemo(
    () =>
      columns.length
        ? columns.concat({
            Header: "Actions",
            Cell: ({ row }) => {
              return (
                <div className="table-btns">
                  <button
                    onClick={(e) => {
                      setActions({ ...actions, delete: true });
                      setOnEditTask(row.original);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={(e) => {
                      setActions({ ...actions, update: true });
                      setOnEditTask(row.original);
                    }}
                  >
                    Update
                  </button>
                </div>
              );
            },
          })
        : [],
    [actions, columns]
  );

  return status === "loading" ? (
    <span>Loading...</span>
  ) : (
    <div className={taskStyle.listContainer}>
      {finalColumns.length && (
        <DataTable columns={finalColumns} data={tasks} />
      )}
      <TaskModal
        actions={actions}
        setActions={setActions}
        onEditTask={onEditTask}
      />
    </div>
  );
};

export default TasksList;
