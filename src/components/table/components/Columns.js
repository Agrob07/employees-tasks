import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Columns = ({ headerGroups }) => {
  return (
    <>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th
              {...column.getHeaderProps(
                column.getSortByToggleProps()
              )}
            >
              {column.render("Header")}
              <span>
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <FaAngleDown />
                  ) : (
                    <FaAngleUp />
                  )
                ) : (
                  ""
                )}
              </span>
            </th>
          ))}
        </tr>
      ))}
    </>
  );
};

export default Columns;
