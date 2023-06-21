import React, { useState } from "react";
import TaskModal from "../modals/TaskModal";
import { initialActions } from "../../util/data/actions";

const AddTask = () => {
  const [actions, setActions] = useState(initialActions);

  return (
    <div className="add-employees">
      <div className="btn-group">
        <button
          className="btn"
          onClick={() => {
            setActions({ ...actions, create: true });
          }}
        >
          Add Task
        </button>
        <TaskModal actions={actions} setActions={setActions}/>
      </div>
    </div>
  );
};

export default AddTask;
