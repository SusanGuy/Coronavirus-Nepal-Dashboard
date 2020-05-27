import React from "react";

const TableHeadorRow = ({ district, children, clicked }) => {
  return district ? (
    <td onClick={clicked}>{children}</td>
  ) : (
    <th onClick={clicked}>{children}</th>
  );
};

export default TableHeadorRow;
