import * as Yup from "yup";

export const taskValidation = Yup.object({
  employeeId: Yup.number().required("Employee ID is required"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  description: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required(" Description Required"),
  startDate: Yup.date().required("Start Date is Required"),
  endDate: Yup.date().required("End Date is Required"),
});
