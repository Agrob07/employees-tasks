import * as Yup from "yup";

export const validationFormik = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  surname: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required(" Last name Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  position: Yup.string().required("Position is Required"),
});
