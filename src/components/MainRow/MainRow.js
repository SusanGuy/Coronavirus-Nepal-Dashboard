import React, { Fragment, useState } from "react";
import * as Icon from "react-feather";
import DropDown from "../DropDown/DropDown";
import RowData from "../RowData/RowData";
const MainRow = ({ name, districts, mama, date, ...rest }) => {
  const [showDistricts, setShowDistricts] = useState(false);

  return (
    <Fragment>
      <tr
        onClick={() => !mama && setShowDistricts(!showDistricts)}
        className={`state ${mama && "is-total"}`}
      >
        <td>
          <div className="title-chevron">
            {!mama && (
              <span
                className={`dropdown ${
                  showDistricts ? "rotateRightDown" : "rotateDownRight"
                }`}
              >
                <Icon.ChevronDown />
              </span>
            )}
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
        <RowData {...rest} />
      </tr>
      {showDistricts && (
        <DropDown date={date} districts={districts} name={name} />
      )}
    </Fragment>
  );
};

export default MainRow;
