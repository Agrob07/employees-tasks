import React, { useEffect, useState } from "react";
import { api } from "../../api/";
import DataTable from "../table/DataTable";
import { toast } from "react-toastify";

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
              width: 100,
            }
          : {
              Header: key.toUpperCase(),
              accessor: key,
              width: 300,
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
      console.log(data);
    } catch (error) {}
    // async (row) => {
    //   try {
    //     const data = await api.deleteEmployee(row.id);
    //     toast.success(
    //       `Employee (ID: ${data.data.id}) successfully created !`
    //     );
    //   } catch (error) {}
    //   // console.log(row.id);
    //   // delete row.cells[rowIndex];
    // };
  };

  const getData = async () => {
    const data = await api.getEmployees();
    return data.data;
  };

  return (
    <div className="employees-list">
      {initData && (
        <DataTable columns={finalColumns} data={initData} />
      )}{" "}
    </div>
  );
};

export default EmployeesList;
