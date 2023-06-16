import React from "react";

const Rows = ({ page, prepareRow }) => {
  return (
    <>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            style={{ border: "1px solid rgba(180,200,220 ,100)" }}
          >
            {row.cells.map((cell) => (
              <td
                {...cell.getCellProps()}
                style={{
                  border: "1px solid rgba(180,200,220 ,100)",
                  minWidth: cell.column.minWidth,
                  width: cell.column.width,
                }}
              >
                {cell.render("Cell")}
              </td>
            ))}
          </tr>
        );
      })}
    </>
  );
};

export default Rows;
