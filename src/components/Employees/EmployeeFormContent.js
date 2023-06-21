import React from "react";
import { Form, useFormikContext } from "formik";

import Modal from "../modals/Modal";

const EmployeeFormContent = ({ isModalOpen, handleCancel }) => {
  const { errors, values, touched, submitForm, handleChange } =
    useFormikContext();

  return (
    <Modal
      isOpen={isModalOpen}
      onCancel={handleCancel}
      onConfirm={() => submitForm()}
    >
      <Form>
        <div className="item">
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
        <div className="item">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={values.surname}
            onChange={handleChange}
          />
          {errors.surname && touched.surname && (
            <p>{errors.surname}</p>
          )}
        </div>
        <div className="item">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
        </div>

        <div className="item">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={values.position}
            onChange={handleChange}
          />
          {errors.position && touched.position && (
            <p>{errors.position}</p>
          )}
        </div>
      </Form>
    </Modal>
  );
};

export default EmployeeFormContent;
