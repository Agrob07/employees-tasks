import React, { useState } from "react";
import Filter from "../Filter/Filter";

import taskStyle from "../../style/tasks.module.css";

const TaskFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const handleVisibility = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={taskStyle.filterFormWrapper}>
      <button
        className={taskStyle.searchBtn}
        onClick={handleVisibility}
      >
        Search
      </button>
      {showFilter && <Filter />}
    </div>
  );
};

export default TaskFilter;
