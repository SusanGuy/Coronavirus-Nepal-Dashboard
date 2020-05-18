import React from "react";
import "./DataRow.css";
const DataRow = ({ name, ...props }) => {
  return (
    <tr className="odd">
      <td className="data-name name-width">
        <span className="save-button">★</span>
        {name}
      </td>

      <td className="data-total total-width">{props.total}</td>

      <td className="data-deceased death-width">{props.deaths}</td>

      <td className="data-recovered recovered-width">{props.recovered}</td>
      <td className="data-active active-width">{props.active}</td>
    </tr>
  );
};

export default DataRow;
