import React, { useState } from "react";
import "../style/Employees.css";
import FormikForm from "../components/Employees/FormikForm";
import EmployeesList from "../components/Employees/EmployeesList";
import { api } from "../api";
import { toast } from "react-toastify";

const Employees = () => {
  const [show, setShow] = useState(null);

  const handleSubmit = async (values) => {
    try {
      const data = await api.createEmployee(values);
      toast.success(
        `Employee (ID: ${data.data.id}) successfully created !`
      );
      api.getEmployees();
    } catch (error) {
      toast.error("Something went Wrong!");
    }
  };

  return (
    <div className="wrapper">
      <div className="add-employees">
        <div className="btn-group">
          <button
            className="btn"
            onClick={() => {
              setShow(true);
            }}
          >
            Add Employees
          </button>
          {show && (
            <button
              className="btn"
              onClick={() => {
                setShow(false);
              }}
            >
              Hide Forrm
            </button>
          )}
        </div>
        {show && <FormikForm handleSubmit={handleSubmit} />}
      </div>
      <EmployeesList />
    </div>
  );
};

export default Employees;
