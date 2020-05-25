import React from "react";

import MainRow from "../MainRow/MainRow";
import { useWindowSize } from "react-use";
const MainTable = ({ type, search, districtCases, provinceCases }) => {
  const windowSize = useWindowSize();


  const districtBody = {
    total: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
  };

  districtCases.forEach((dist) => {
    districtBody.total = districtBody.total + dist.total;
    districtBody.recovered = districtBody.recovered + dist.recovered;
    districtBody.deaths = districtBody.deaths + dist.deaths;
    districtBody.active = districtBody.active + dist.active;
  });

  return (
    <div
      className="scrollable-table"
      style={
        type === 1
          ? {}
          : {
              overflow: "hidden",
            }
      }
    >
      <table className="table fadeInUp" style={{ animationDelay: "1.8s" }}>
        <thead>
          <tr>
            <th className="state-heading">
              <div className="heading-content">
                <abbr title="State">Name</abbr>
              </div>
            </th>
            <th>
              <div className="heading-content">
                <abbr className="" title="confirmed">
                  {windowSize.width <= 850 ? "Total" : "Confirmed"}
                </abbr>
              </div>
            </th>
            <th>
              <div className="heading-content">
                <abbr className="" title="active">
                  {windowSize.width <= 850 ? "Active" : "Active"}
                </abbr>
              </div>
            </th>
            <th>
              <div className="heading-content">
                <abbr className="" title="recovered">
                  {windowSize.width <= 850 ? "Recovery" : "Recovered"}
                </abbr>
              </div>
            </th>
            <th>
              <div className="heading-content">
                <abbr className="" title="deaths">
                  Death
                </abbr>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {type === 1
            ? districtCases
                .filter((dat) =>
                  dat.name.toLowerCase().includes(search.toLowerCase())
                )
                .map(({ id, ...rest }) => <MainRow key={id} {...rest} />)
            : provinceCases
                .filter((dat) =>
                  dat.name.toLowerCase().includes(search.toLowerCase())
                )
                .map(({ id, ...rest }) => <MainRow key={id} {...rest} />)}
        </tbody>
        <tbody>
          <MainRow name="Total" mama="is-total" {...districtBody} />
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
