import React from "react";

const Box = ({ total, active, recovered, deaths }) => {
  return (
    <div className="map-stats">
      <div className="stats fadeInUp" style={{ animationDelay: "2s" }}>
        <h5>Confirmed</h5>
        <div className="stats-bottom">
          <h1>{total}</h1>
          <h6>&nbsp;</h6>
        </div>
      </div>
      <div
        className="stats is-blue fadeInUp"
        style={{ animationDelay: "2.1s" }}
      >
        <h5>Active</h5>
        <div className="stats-bottom">
          <h1>{active}</h1>
          <h6>&nbsp;</h6>
        </div>
      </div>
      <div
        className="stats is-green fadeInUp"
        style={{ animationDelay: "2.2s" }}
      >
        <h5>Recovered</h5>
        <div className="stats-bottom">
          <h1>{recovered}</h1>
          <h6>&nbsp;</h6>
        </div>
      </div>
      <div
        className="stats is-gray fadeInUp"
        style={{ animationDelay: "2.3s" }}
      >
        <h5>Deceased</h5>
        <div className="stats-bottom">
          <h1>{deaths}</h1>
          <h6>&nbsp;</h6>
        </div>
      </div>
    </div>
  );
};

export default Box;
