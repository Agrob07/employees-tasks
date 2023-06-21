import React from "react";
import { Formik } from "formik";

import EmployeeFormContent from "./EmployeeFormContent";
import { employeeValidation as validationSchema } from "../../util/constant/employeeValidation";

const emptyValues = {
  name: "",
  surname: "",
  email: "",
  position: "",
};

const EmployeeForm = ({
  handleSubmit,
  onEditEmployee,
  isModalOpen,
  handleCancel,
}) => {
  const initialValues = onEditEmployee || emptyValues;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <EmployeeFormContent
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
    </Formik>
  );
};

export default EmployeeForm;
