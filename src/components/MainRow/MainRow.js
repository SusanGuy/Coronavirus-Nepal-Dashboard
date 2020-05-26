import React, { Fragment } from "react";
import * as Icon from "react-feather";
import ChangedIcon from "../ChangedIcon/ChangedIcon";
import DropDown from "../DropDown/DropDown";
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
    <Fragment>
      <tr className={`state ${mama && "is-total"}`}>
        <td>
          <div className="title-chevron">
            <span className="dropdown rotateDownRight">
              <Icon.ChevronDown />
            </span>
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
          <span className="total">{total}</span>
        </td>
        <td>
          <span className="total">{active}</span>
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
    </Fragment>
  );
};

export default MainRow;
