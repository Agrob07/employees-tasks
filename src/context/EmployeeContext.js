import React, { createContext, useEffect, useState } from "react";

import { getData } from "../util/helpers/getData";
import { employeesApi } from "../util/config";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(
    () => async () => {
      if (!employees.length) {
        const data = await getData(employeesApi);
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
