import React from "react";
import ChangedIcon from "../ChangedIcon/ChangedIcon";
const MainRow = ({ name, total, active, recovered, deaths }) => {
  return (
    <tr className="state">
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
        <ChangedIcon mama="is-confirmed" />
        <span className="is-confirmed total">{total}</span>
      </td>
      <td>
        <span className="is-active total">{active}</span>
      </td>
      <td>
        <ChangedIcon mama="is-recovered" />
        <span className="is-recovered total">{recovered}</span>
      </td>
      <td>
        <ChangedIcon mama="is-deaths" />
        <span className="is-deaths total">{deaths}</span>
      </td>
    </tr>
  );
};

export default MainRow;
