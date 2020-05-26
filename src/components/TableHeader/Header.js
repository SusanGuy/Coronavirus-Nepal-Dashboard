import React, { Fragment } from "react";
import TableHeaderorRow from "./TableHeadorRow";
import { useWindowSize } from "react-use";

const Header = ({ state, district }) => {
  const isPhone = useWindowSize().width < 850;
  return (
    <Fragment>
      <TableHeaderorRow district={district} state={state}>
        <div className="heading-content">
          <abbr title={state ? "State" : "District"}>
            {state ? "Province" : "District"}
          </abbr>
          <div style={{ display: "none" }}>
            <div className="arrow-down"></div>
          </div>
        </div>
      </TableHeaderorRow>
      <TableHeaderorRow district={district} state={state}>
        <div className="heading-content">
          <abbr className={isPhone ? "is-confirmed" : ""} title="confirmed">
            {isPhone ? "Total" : "Confirmed"}
          </abbr>
          <div style={{ display: "initial" }}>
            <div className="arrow-down"></div>
          </div>
        </div>
      </TableHeaderorRow>
      <TableHeaderorRow district={district} state={state}>
        <div className="heading-content">
          <abbr className={isPhone ? "is-active" : ""} title="active">
            Active
          </abbr>
          <div style={{ display: "none" }}>
            <div className="arrow-down"></div>
          </div>
        </div>
      </TableHeaderorRow>
      <TableHeaderorRow district={district} state={state}>
        <div className="heading-content">
          <abbr className={isPhone ? "is-recovered" : ""} title="recovered">
            {isPhone ? "Recovery" : "Recovered"}
          </abbr>
          <div style={{ display: "none" }}>
            <div className="arrow-down"></div>
          </div>
        </div>
      </TableHeaderorRow>
      <TableHeaderorRow district={district} state={state}>
        <div className="heading-content">
          <abbr className={isPhone ? "is-death" : ""} title="deceased">
            {isPhone ? "Death" : "Deceased"}
          </abbr>
          <div style={{ display: "none" }}>
            <div className="arrow-down"></div>
          </div>
        </div>
      </TableHeaderorRow>
    </Fragment>
  );
};

export default Header;
