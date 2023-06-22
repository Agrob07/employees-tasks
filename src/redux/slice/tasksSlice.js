import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../api";
import { taskApi } from "../../util/config";

const initialState = {
  employeeTasks: [],
  employeeTaskStatus: "idle",
  tasks: [],
  status: "idle",
};

export const fetchTasksById = createAsyncThunk(
  "tasks/fetchTasksById",
  async (userId) => {
    const response = await api.getDataById(
      `${taskApi}?employeeId=${userId}`
    );
    return response;
  }
);

export const fetchAllTasks = createAsyncThunk(
  "tasks/fetchAllTasks",
  async (params) => {
    const queryParams = new URLSearchParams(params);
    const url = queryParams ? `${taskApi}?${queryParams}` : taskApi;

    const response = await api.getData(url);
    return response;
  }
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksById.pending, (state) => {
        state.employeeTaskStatus = "loading";
      })
      .addCase(fetchTasksById.fulfilled, (state, action) => {
        state.employeeTasks = action.payload;
        state.employeeTaskStatus = "fulfilled";
      })
      .addCase(fetchAllTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.status = "fulfilled";
      })
      .addDefaultCase((state, action) => {});
  },
});

export const selectEmployeeTasks = (state) =>
  state.tasks.employeeTasks;
export const selectEmployeeTaskStatus = (state) =>
  state.tasks.employeeTaskStatus;

export const selectTasks = (state) => state.tasks.tasks;
export const selectTaskStatus = (state) => state.tasks.status;

export default tasksSlice.reducer;
