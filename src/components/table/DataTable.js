import React, { useState } from "react";
import { useTable, usePagination, useSortBy } from "react-table";

import Rows from "./components/Rows";
import Columns from "./components/Columns";
import Pagination from "./components/Pagination";

import "../../style/Employees.css";

const DataTable = ({ columns, data }) => {
  const [pageSize] = useState(5);

  const {
    getTableBodyProps,
    getTableProps,
    prepareRow,
    canPreviousPage,
    previousPage,
    headerGroups,
    pageOptions,
    canNextPage,
    nextPage,
    page,
    state: { pageIndex },
  } = useTable(
    { columns, data, initialState: { pageSize } },
    useSortBy,
    usePagination
  );

  return (
    <div>
      <table {...getTableProps()} className="table-wrapper">
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
