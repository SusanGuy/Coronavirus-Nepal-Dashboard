import React from "react";

const Box = ({
  total,
  active,
  recovered,
  deaths,
  additionalTotal,
  additionalRecovery,
  additionalDeaths,
  additionalActive,
}) => {
  const bug =
    additionalTotal === total &&
    additionalRecovery === recovered &&
    additionalDeaths === deaths;

  return (
    <div className="map-stats">
      <div className="stats fadeInUp" style={{ animationDelay: "2s" }}>
        <h5>Confirmed</h5>
        <div className="stats-bottom">
          <h1>{total}</h1>
          {additionalTotal && additionalTotal !== 0 && !bug ? (
            <h6> + {additionalTotal}</h6>
          ) : (
            <h6>&nbsp;</h6>
          )}
        </div>
      </div>
      <div
        className="stats is-blue fadeInUp"
        style={{ animationDelay: "2.1s" }}
      >
        <h5>Active</h5>
        <div className="stats-bottom">
          <h1>{active}</h1>
          <h6>
            {additionalActive && additionalActive !== 0 && !bug
              ? `${
                  additionalActive < 0
                    ? `- ${additionalActive * -1}`
                    : `+${additionalActive}`
                }`
              : " "}
          </h6>
        </div>
      </div>
      <div
        className="stats is-green fadeInUp"
        style={{ animationDelay: "2.2s" }}
      >
        <h5>Recovered</h5>
        <div className="stats-bottom">
          <h1>{recovered}</h1>
          {additionalRecovery && additionalRecovery !== 0 && !bug ? (
            <h6>+ {additionalRecovery}</h6>
          ) : (
            <h6>&nbsp;</h6>
          )}
        </div>
      </div>
      <div
        className="stats is-gray fadeInUp"
        style={{ animationDelay: "2.3s" }}
      >
        <h5>Deceased</h5>
        <div className="stats-bottom">
          <h1>{deaths}</h1>
          <h6>
            {additionalDeaths && additionalDeaths !== 0 && !bug ? (
              <h6>+ {additionalDeaths}</h6>
            ) : (
              <h6>&nbsp;</h6>
            )}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Box;
