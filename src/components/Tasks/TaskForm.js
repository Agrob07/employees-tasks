import React from "react";
import { Formik } from "formik";

import { taskValidation as validationSchema } from "../../util/constant/taskValidation";
import TaskFormContent from "./TaskFormContent";

const emptyValues = {
  employeeId: 1,
  name: "",
  description: "",
  startDate: "",
  endDate: "",
};

const TaskForm = ({
  handleSubmit,
  onEditTask,
  isModalOpen,
  handleCancel,
}) => {
  const initialValues = onEditTask
    ? {
        ...onEditTask,
        employeeId: parseInt(onEditTask.employeeId) || 0,
      }
    : emptyValues;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <TaskFormContent
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
    </Formik>
  );
};

export default TaskForm;
