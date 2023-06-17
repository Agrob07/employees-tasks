export const getColumns = (source) => {
  return source.length && typeof source[0] === "object"
    ? Object.keys(source[0]).map((key) =>
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
};
