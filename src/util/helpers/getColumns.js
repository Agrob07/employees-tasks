import { Link } from "react-router-dom";

import { checkType } from "./checkType";
import { EMPLOYEES } from "../data/contentTypes";

export const getColumns = (source, type = EMPLOYEES) => {
  const longest = checkType(source, type);

  return source.length && typeof source[0] === "object"
    ? Object.keys(longest).map((key) =>
        key === "name"
          ? {
              Header: key.toUpperCase(),
              Cell: ({ row }) => (
                <Link
                  to={`/employees/${
                    type === EMPLOYEES
                      ? row.original.id
                      : row.original.employeeId
                  }`}
                >
                  {row.original.name}
                </Link>
              ),
            }
          : {
              Header: key.toUpperCase(),
              accessor: key,
            }
      )
    : [];
};
