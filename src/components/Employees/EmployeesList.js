import React, { useEffect, useState } from "react";
import { api } from "../../api/";
import DataTable from "../table/DataTable";
import "../../style/Employees.css";

const EmployeesList = () => {
  const [initData, setInitData] = useState([]);

  useEffect(
    () => async () => {
      if (!initData.length) {
        const data = await getData();
        setInitData(data);
      }
    },
    [initData.length]
  );

  const columns = initData[0]
    ? Object.keys(initData[0]).map((key) =>
        key === "completed"
          ? {
              Header: key.toUpperCase(),
              accessor: (d) => d.completed.toString(),
            }
          : {
              Header: key.toUpperCase(),
              accessor: key,
            }
      )
    : [];

  const finalColumns = columns.concat({
    Header: "Actions",
    Cell: ({ row }) => {
      return (
        <div className="table-btns">
          <button onClick={() => handleDelete(row.original.id)}>
            Delete
          </button>
          <button>Update</button>
        </div>
      );
    },
  });

  const handleDelete = async (empId) => {
    try {
      const data = await api.deleteEmployee(empId);
    } catch (error) {}
  };

  const getData = async () => {
    const data = await api.getEmployees();
    return data.data;
  };

  return (
    <div className="employees-list">
      {initData && (
        <DataTable columns={finalColumns} data={initData} />
      )}
    </div>
  );
};

export default EmployeesList;
