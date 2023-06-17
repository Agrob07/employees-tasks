import React, { useEffect, useState } from "react";
import { api } from "../../api/";
import DataTable from "../table/DataTable";
import "../../style/Employees.css";
import ConfirmationModal from "../ConfirmationModal";
import { toast } from "react-toastify";

const EmployeesList = () => {
  const [initData, setInitData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [empId, setEmpId] = useState(null);

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

  const handleDelete = (id) => {
    setModalOpen(true);
    setEmpId(id);
  };

  const getData = async () => {
    const data = await api.getEmployees();
    return data.data;
  };

  const handleConfirm = async () => {
    try {
      const data = await api.deleteEmployee(empId);
      console.log(data);
      toast.success(`Employee (ID: ${empId}) successfully deleted !`);
      setModalOpen(false);
      api.getEmployees();
    } catch (error) {
      toast.error("Something went Wrong!");
    }
  };

  const handleCancel = () => {
    // Handle the cancellation logic here
    setModalOpen(false);
  };

  return (
    <>
      <div className="employees-list">
        {initData && (
          <DataTable columns={finalColumns} data={initData} />
        )}

        <ConfirmationModal
          isOpen={isModalOpen}
          message="Are you sure ?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </div>
    </>
  );
};

export default EmployeesList;
