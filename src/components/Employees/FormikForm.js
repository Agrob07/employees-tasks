import React from "react";
import { useFormik } from "formik";
import { validationFormik as validationSchema } from "../../constant/validationFormik";

const initialValues = {
  name: "",
  surname: "",
  email: "",
  position: "",
};

const FormikForm = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="item">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <p>{formik.errors.name}</p>
        )}
      </div>
      <div className="item">
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formik.values.surname}
          onChange={formik.handleChange}
        />
        {formik.errors.surname && formik.touched.surname && (
          <p>{formik.errors.surname}</p>
        )}
      </div>
      <div className="item">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p>{formik.errors.email}</p>
        )}
      </div>

      <div className="item">
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formik.values.position}
          onChange={formik.handleChange}
        />
        {formik.errors.position && formik.touched.position && (
          <p>{formik.errors.position}</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikForm;
