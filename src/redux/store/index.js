import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from "../slice/employeeSlice";
import filterReducer from "../slice/filterSlice";
import tasksReducer from "../slice/tasksSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    filter: filterReducer,
    tasks: tasksReducer,
  },
});
