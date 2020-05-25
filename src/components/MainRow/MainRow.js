import React from "react";

import ChangedIcon from "../ChangedIcon/ChangedIcon";
const MainRow = ({
  name,
  total,
  active,
  recovered,
  deaths,
  additionalTotal,
  additionalDeaths,
  additionalRecovery,
  mama,
}) => {
  return (
    <tr className={`state ${mama && "is-total"}`}>
      <td>
        <div className="title-chevron">
          <span className="title-icon">
            {name}
            <span
              data-tip=""
              data-event="touchstart mouseover"
              data-event-off="mouseleave"
              currentitem="false"
            />
          </span>
        </div>
      </td>
      <td>
        {additionalTotal !== undefined && additionalTotal !== 0 && (
          <ChangedIcon data={additionalTotal} mama="is-confirmed" />
        )}
        <span className=" total">{total}</span>
      </td>
      <td>
        <span className="is-active total">{active}</span>
      </td>
      <td>
        {additionalRecovery !== undefined && additionalRecovery !== 0 && (
          <ChangedIcon data={additionalRecovery} mama="is-recovered" />
        )}
        <span className="total">{recovered}</span>
      </td>
      <td>
        {additionalDeaths !== undefined && additionalDeaths !== 0 && (
          <ChangedIcon data={additionalDeaths} mama="is-deaths" />
        )}
        <span className=" total">{deaths}</span>
      </td>
    </tr>
  );
};

export default MainRow;
