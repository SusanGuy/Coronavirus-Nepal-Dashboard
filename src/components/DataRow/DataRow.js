import React from "react";

const DataRow = ({ name, ...props }) => {
  return (
    <tr>
      <td>{name}</td>
      {Object.keys(props).map((corona) => (
        <td>{props[corona]}</td>
      ))}
    </tr>
  );
};

export default DataRow;
