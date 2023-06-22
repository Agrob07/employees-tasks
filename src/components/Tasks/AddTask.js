import React, { useState } from "react";

import TaskModal from "../modals/TaskModal";
import { initialActions } from "../../util/data/actions";

import taskStyle from "../../style/tasks.module.css";

const AddTask = () => {
  const [actions, setActions] = useState(initialActions);

  return (
    <div className={taskStyle.addContianer}>
      <div className={taskStyle.btnGroup}>
        <button
          className={taskStyle.addBtn}
          onClick={() => {
            setActions({ ...actions, create: true });
          }}
        >
          Add Task
        </button>
        <TaskModal actions={actions} setActions={setActions} />
      </div>
    </div>
  );
};

export default AddTask;
