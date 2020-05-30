import React from "react";
import QuickFacts from "../QuickFacts/QuickFacts";
import MiniGraph from "../MiniGraph/MiniGraph";
import MainTable from "../MainTable/MainTable";
import Municipality from "../Municipality/Municipality";
import moment from "moment";

const LeftContainer = ({
  total,
  active,
  recovered,
  deaths,
  newTotal,
  newRecovered,
  newDeath,
  newActive,
  date,
  ...props
}) => {
  return (
    <div className="home-left">
      <div className="header fadeInUp" style={{ animationDelay: "1s" }}>
        <div className="actions">
          <h5>Updated {moment(new Date(date)).fromNow()}</h5>
        </div>
      </div>
      <QuickFacts
        total={total}
        recovered={recovered}
        deaths={deaths}
        active={active}
        date={date}
        newTotal={newTotal}
        newRecovered={newRecovered}
        newDeath={newDeath}
        newActive={newActive}
      />
      <MiniGraph />
      <h5
        className="table-fineprint fadeInUp"
        style={{ animationDelay: "1.5s" }}
      >
        Compiled from Ministry of Health & Population of Nepal
      </h5>
      <MainTable
        date={date}
        total={total}
        recovered={recovered}
        deaths={deaths}
        active={active}
        additionalTotal={newTotal}
        additionalRecovery={newRecovered}
        additionalDeaths={newDeath}
        additionalActive={newActive}
        {...props}
      />
      <Municipality />
    </div>
  );
};

export default React.memo(LeftContainer);
