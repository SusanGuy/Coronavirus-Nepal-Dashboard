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
        <ChangedIcon mama="" />
        <span className="total">{total}</span>
      </td>
      <td>
        <span className="delta is-active" />
        <span className="total">{active}</span>
      </td>
      <td>
        <span className="delta is-recovered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
          1202
        </span>
        <span className="total">{recovered}</span>
      </td>
      <td>
        <span className="total">{deaths}</span>
      </td>
    </tr>
  );
};

export default MainRow;
