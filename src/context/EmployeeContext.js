import React, { createContext, useEffect, useState } from "react";
import { getData } from "../util/helpers/getData";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(
    () => async () => {
      if (!employees.length) {
        const data = await getData();
        setEmployees(data);
      }
    },
    [employees.length]
  );

  const context = {
    employees,
    setEmployees,
  };
  return (
    <EmployeeContext.Provider value={context}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeProvider, EmployeeContext };
