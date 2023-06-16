import React from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import Pagination from "./components/Pagination";
import Rows from "./components/Rows";
import Columns from "./components/Columns";
import "../../style/Employees.css";

const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    { columns, data, initialState: { pageSize: 8 } },
    useSortBy,
    usePagination
  );

  return (
    <div>
      <table
        {...getTableProps()}
        className="table-wrapper"
      >
        <thead>
          <Columns headerGroups={headerGroups} />
        </thead>
        <tbody {...getTableBodyProps()}>
          <Rows page={page} prepareRow={prepareRow} />
        </tbody>
      </table>
      {page.length ? (
        <Pagination
          previousPage={previousPage}
          canPreviousPage={canPreviousPage}
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          nextPage={nextPage}
          canNextPage={canNextPage}
        />
      ) : null}
    </div>
  );
};

export default DataTable;
