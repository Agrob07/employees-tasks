import React from "react";

const Pagination = ({
  previousPage,
  canPreviousPage,
  pageIndex,
  pageOptions,
  nextPage,
  canNextPage,
}) => {
  return (
    <div>
      <button
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        Previous
      </button>
      <span>
        Page
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
