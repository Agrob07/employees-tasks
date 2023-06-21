import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../slice/employeeSlice";
import tasksSlice from "../slice/tasksSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    tasks: tasksSlice,
  },
});
