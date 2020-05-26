import React from "react";

const TableHeadorRow = ({ district, children }) => {
  return district ? <td>{children}</td> : <th>{children}</th>;
};

export default TableHeadorRow;
