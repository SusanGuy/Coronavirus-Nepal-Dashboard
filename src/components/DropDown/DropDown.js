import React, { useState, Fragment } from "react";
import Header from "../TableHeader/Header";
import RowData from "../RowData/RowData";
import moment from "moment";
const DropDown = ({ districts, name, date }) => {
  const total = districts.reduce((init, current) => init + current.total, 0);
  const isRed = (data) => (data / total) * 100 > 10;
  const isOrange = (data) =>
    (data / total) * 100 < 10 && (data / total) * 100 >= 5;

  const [sortData, setSortData] = useState({
    sortColumn: "total",
    isAscending: false,
  });

  const { sortColumn, isAscending } = sortData;

  const handleSort = (arr) => {
    return arr.sort((a, b) => {
      if (a[sortColumn] > b[sortColumn]) {
        return isAscending ? 1 : -1;
      } else if (a[sortColumn] < b[sortColumn]) {
        return isAscending ? -1 : 1;
      } else {
        return 0;
      }
    });
  };

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
          <p>Last updated {moment(date).fromNow()}</p>
        </td>
        <td
          style={{ display: "none" }}
          className="state-page-link"
          colSpan="2"
          align="center"
        >
          View {name}'s Page
        </td>
      </tr>
      <tr className="district-heading">
        <Header {...sortData} setSortData={setSortData} district />
      </tr>
      {handleSort(districts).map(({ id, name, ...rest }) => {
        let classDai;
        if (isRed(rest.total)) {
          classDai = "is-Red";
        } else if (isOrange(rest.total)) {
          classDai = "is-Orange";
        } else {
          classDai = "is-Green";
        }
        return (
          <tr key={id} className="district">
            <td className={classDai}>
              <div className="title-chevron">
                <span className="title-icon">
                  {name}
                  <span
                    data-for="district"
                    data-tip=""
                    data-event="touchstart mouseover"
                    data-event-off="mouseleave"
                    currentitem="false"
                  ></span>
                </span>
              </div>
            </td>
            <RowData {...rest} />
          </tr>
        );
      })}

      <tr className="is-spacer">
        <td colSpan="5">
          <p></p>
        </td>
      </tr>
    </Fragment>
  );
};

export default DropDown;
