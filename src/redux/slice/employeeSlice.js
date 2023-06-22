import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../api";
import { employeesApi } from "../../util/config";

const initialState = {
  employee: null,
  tasks: null,
  status: "idle",
};

export const fetchUserById = createAsyncThunk(
  "employee/fetchUserById",
  async (userId) => {
    const response = await api.getDataById(employeesApi, userId);
    return response;
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.status = "fulfilled";
      })
      .addDefaultCase((state, action) => {});
  },
});

export const selectEmployee = (state) => state.employee.employee;
export const selectEmployeeStatus = (state) => state.employee.status;

export default employeeSlice.reducer;
