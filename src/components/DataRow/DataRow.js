import React from "react";
import "./DataRow.css";
const DataRow = ({ name, setFavorites, ...props }) => {
  return (
    <tr className="odd">
      <td className="data-name name-width">
        <span
          onClick={() => {
            const saved = localStorage.getItem("saved");
            if (saved) {
              let mainData = JSON.parse(saved);
              if (mainData.find((data) => data.name === name)) {
                mainData = mainData.filter((data) => data.name !== name);
              } else {
                mainData.push({ name, ...props });
              }
              localStorage.setItem("saved", JSON.stringify(mainData));
              setFavorites(mainData);
            } else {
              const data = [{ name, ...props }];
              localStorage.setItem("saved", JSON.stringify(data));
              setFavorites(data);
            }
          }}
          className={`save-button ${
            localStorage.getItem("saved") &&
            JSON.parse(localStorage.getItem("saved")).find(
              (data) => data.name === name
            ) &&
            "selected"
          }`}
        >
          ★
        </span>
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
