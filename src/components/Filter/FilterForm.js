import React from "react";
import { Formik } from "formik";

import FilterFormContent from "./FilterFormContent";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTaskFilter,
  setTaskFilters,
} from "../../redux/slice/filterSlice";
import { fetchAllTasks } from "../../redux/slice/tasksSlice";
import { getOnlyTruthyKeys } from "../../util/helpers/getOnlyTruthyKeys";

const FilterForm = () => {
  const initialValues = useSelector(selectTaskFilter);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const params = getOnlyTruthyKeys(values);

    dispatch(setTaskFilters(values));
    dispatch(fetchAllTasks(params));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FilterFormContent />
    </Formik>
  );
};

export default FilterForm;
