import React from "react";

import TasksList from "../components/Tasks/TasksList";
import AddTask from "../components/Tasks/AddTask";
import "../style/tasks.css";

const Tasks = () => {
  return (
    <div className="wrapper-task">
      <AddTask />
      <TasksList />
    </div>
  );
};

export default Tasks;
