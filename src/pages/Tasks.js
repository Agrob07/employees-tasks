import React from "react";

import TasksList from "../components/Tasks/TasksList";
import AddTask from "../components/Tasks/AddTask";

import TaskFilter from "../components/Tasks/TaskFilter";

import pageStyle from "../style/page.module.css";

const Tasks = () => {
  return (
    <div className={`${pageStyle.page} ${pageStyle.taskPage}`}>
      <AddTask />
      <TaskFilter />
      <TasksList />
    </div>
  );
};

export default Tasks;
