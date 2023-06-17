import React from "react";
import { Formik } from "formik";

import FormContent from "./FormContent";
import { validationFormik as validationSchema } from "../../constant/validationFormik";

const emptyValues = {
  name: "",
  surname: "",
  email: "",
  position: "",
};

const FormikForm = ({
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
      <FormContent
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
    </Formik>
  );
};

export default FormikForm;
