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
    <div className="flex justify-center m-2 gap-8">
      <button
        className="px-6 py-2 rounded bg-slate-500 text-yellow-50"
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
      <button
        onClick={() => nextPage()}
        disabled={!canNextPage}
        className="px-8 py-2 rounded bg-slate-500 text-yellow-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
