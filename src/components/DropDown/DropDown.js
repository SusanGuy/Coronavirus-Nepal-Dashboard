import React, { Fragment } from "react";
import Header from "../TableHeader/Header";
const DropDown = ({ districts }) => {
  return (
    <Fragment>
      <tr className="is-spacer">
        <td colSpan="5">
          <p></p>
        </td>
      </tr>
      <tr className="state-last-update">
        <td colSpan="3" style={{ paddingBottom: "0px" }}>
          <p className="spacer"></p>
          <p>Last updated 3 days ago</p>
        </td>
        <td className="state-page-link" colSpan="2" align="center">
          View Bagmati Province's Page
        </td>
      </tr>
      <tr className="district-heading">
        <Header district />
      </tr>
    </Fragment>
  );
};

export default DropDown;
