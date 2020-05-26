import React from "react";

const QuickFacts = ({
  total,
  newTotal,
  newRecovered,
  newDeath,
  recovered,
  newActive,
  deaths,
  active,
}) => {
  const bug =
    newTotal === total && newRecovered === recovered && newDeath === deaths;

  return (
    <div className="Level">
      <div
        className="level-item is-cherry fadeInUp"
        style={{ animationDelay: "1s" }}
      >
        <h5>Confirmed</h5>
        {newTotal && newTotal > 0 && !bug ? (
          <h4>[+{newTotal}]</h4>
        ) : (
          <h4>&nbsp;</h4>
        )}
        <h1>{total}</h1>
      </div>
      <div
        className="level-item is-blue fadeInUp"
        style={{ animationDelay: "1.1s" }}
      >
        <h5 className="heading">Active</h5>
        {newActive && newActive > 0 && !bug ? (
          <h4>
            [{newActive > 0 ? "+" : "-"}
            {newActive > 0 ? newActive : newActive * -1}]
          </h4>
        ) : (
          <h4>&nbsp;</h4>
        )}
        <h1 className="title has-text-info">{active}</h1>
      </div>
      <div
        className="level-item is-green fadeInUp"
        style={{ animationDelay: "1.2s" }}
      >
        <h5 className="heading">Recovered</h5>
        {newRecovered && newRecovered > 0 && !bug ? (
          <h4>[+{newRecovered}]</h4>
        ) : (
          <h4>&nbsp;</h4>
        )}
        <h1 className="title has-text-success">{recovered}</h1>
      </div>
      <div
        className="level-item is-gray fadeInUp"
        style={{ animationDelay: "1.3s" }}
      >
        <h5 className="heading">Deceased</h5>
        {newDeath && newDeath > 0 && !bug ? (
          <h4>[+{newDeath}]</h4>
        ) : (
          <h4>&nbsp;</h4>
        )}
        <h1 className="title has-text-grey">{deaths}</h1>
      </div>
    </div>
  );
};

export default QuickFacts;
