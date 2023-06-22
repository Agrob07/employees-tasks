import { useContext } from "react";

import { EmployeeContext } from "../context/EmployeeContext";

const useEmployees = () => {
  const context = useContext(EmployeeContext);

  return context;
};

export default useEmployees;
