import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskFilter: {
    name_like: "",
    description_like: "",
    startDate: "",
    endDate: "",
  },
};

export const filterSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTaskFilters: (state, action) => {
      state.taskFilter = action.payload;
    },
  },
});

export const { setTaskFilters } = filterSlice.actions;
export const selectTaskFilter = (state) => state.filter.taskFilter;

export default filterSlice.reducer;
