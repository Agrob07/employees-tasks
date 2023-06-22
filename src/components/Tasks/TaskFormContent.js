import React from "react";
import { Form, useFormikContext } from "formik";

import Modal from "../modals/Modal";
import pageStyle from "../../style/page.module.css";

const TaskFormContent = ({ isModalOpen, handleCancel }) => {
  const { errors, values, touched, submitForm, handleChange } =
    useFormikContext();

  return (
    <Modal
      isOpen={isModalOpen}
      onCancel={handleCancel}
      onConfirm={submitForm}
    >
      <Form>
        <div className={pageStyle.item}>
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="number"
            id="employeeId"
            name="employeeId"
            value={values.employeeId}
            min={1}
            onChange={handleChange}
          />
          {errors.name && touched.name && <p>{errors.name}</p>}
        </div>
        <div className={pageStyle.item}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && <p>{errors.name}</p>}
        </div>
        <div className={pageStyle.item}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          {errors.surname && touched.surname && (
            <p>{errors.surname}</p>
          )}
        </div>
        <div className={pageStyle.item}>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            min="1997-01-01"
            max="2030-12-31"
            value={values.startDate}
            onChange={handleChange}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
        </div>

        <div className={pageStyle.item}>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={values.endDate}
            onChange={handleChange}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
        </div>
      </Form>
    </Modal>
  );
};

export default TaskFormContent;
