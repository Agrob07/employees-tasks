import React from "react";
import FilterForm from "./FilterForm";
import filterStyle from "../../style/filter.module.css";

const Filter = () => {
  return (
    <div className={filterStyle.filterWrapper}>
      <FilterForm />
    </div>
  );
};

export default Filter;
