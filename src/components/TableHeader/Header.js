import React, { Fragment } from "react";
import TableHeaderorRow from "./TableHeadorRow";
import { useWindowSize } from "react-use";

const Header = ({ isAscending, sortColumn, setSortData, state, district }) => {
  const isPhone = useWindowSize().width < 850;

  const handleClick = (title) => {
    if (sortColumn === title) {
      setSortData({
        sortColumn: sortColumn,
        isAscending: !isAscending,
      });
    } else {
      setSortData({
        isAscending: isAscending,
        sortColumn: title,
      });
    }
  };
  const isColumn = (title) => sortColumn === title;

  return (
    <Fragment>
      <TableHeaderorRow
        clicked={() => handleClick("name")}
        district={district}
        state={state}
      >
        <div className="heading-content">
          <abbr title={state ? "State" : "District"}>
            {state ? "Province" : "District"}
          </abbr>
          <div style={{ display: isColumn("name") ? "initial" : "none" }}>
            <div className={isAscending ? "arrow-up" : "arrow-down"}></div>
          </div>
        </div>
      </TableHeaderorRow>
      <TableHeaderorRow
        clicked={() => handleClick("total")}
        district={district}
        state={state}
      >
        <div className="heading-content">
          <abbr className={isPhone ? "is-confirmed" : ""} title="confirmed">
            {isPhone ? "Total" : "Confirmed"}
          </abbr>
          <div style={{ display: isColumn("total") ? "initial" : "none" }}>
            <div className={isAscending ? "arrow-up" : "arrow-down"}></div>
          </div>
        </div>
      </TableHeaderorRow>
      <TableHeaderorRow
        clicked={() => handleClick("active")}
        district={district}
        state={state}
      >
        <div className="heading-content">
          <abbr className={isPhone ? "is-active" : ""} title="active">
            Active
          </abbr>
          <div style={{ display: isColumn("active") ? "initial" : "none" }}>
            <div className={isAscending ? "arrow-up" : "arrow-down"}></div>
          </div>
        </div>
      </TableHeaderorRow>
      <TableHeaderorRow
        clicked={() => handleClick("recovered")}
        district={district}
        state={state}
      >
        <div className="heading-content">
          <abbr className={isPhone ? "is-recovered" : ""} title="recovered">
            {isPhone ? "Recovery" : "Recovered"}
          </abbr>
          <div style={{ display: isColumn("recovered") ? "initial" : "none" }}>
            <div className={isAscending ? "arrow-up" : "arrow-down"}></div>
          </div>
        </div>
      </TableHeaderorRow>
      <TableHeaderorRow
        clicked={() => handleClick("deaths")}
        district={district}
        state={state}
      >
        <div className="heading-content">
          <abbr className={isPhone ? "is-death" : ""} title="deceased">
            {isPhone ? "Death" : "Deceased"}
          </abbr>
          <div style={{ display: isColumn("deaths") ? "initial" : "none" }}>
            <div className={isAscending ? "arrow-up" : "arrow-down"}></div>
          </div>
        </div>
      </TableHeaderorRow>
    </Fragment>
  );
};

export default Header;
