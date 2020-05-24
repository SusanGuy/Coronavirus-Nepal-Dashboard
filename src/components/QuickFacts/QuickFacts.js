import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const QuickFacts = ({ total, recovered, deaths, active }) => {
  const [newData, setNewData] = useState({
    newTotal: 0,
    newRecovered: 0,
    newDeath: 0,
  });

  useEffect(() => {
    const getYesterDayData = async (date) => {
      try {
        const { data } = await axios.get(
          "https://data.nepalcorona.info/api/v1/covid/timeline"
        );
        const { totalCases, totalRecoveries, totalDeaths } = data.find(
          (dat) => dat.date === date
        );

        setNewData({
          newTotal: total - totalCases,
          newRecovered: recovered - totalRecoveries,
          newDeath: deaths - totalDeaths,
        });
      } catch (error) {}
    };

    getYesterDayData(moment().subtract(1, "days").format("YYYY-MM-DD"));
  }, [deaths, recovered, total]);

  const { newTotal, newRecovered, newDeath } = newData;

  return (
    <div className="Level">
      <div
        className="level-item is-cherry fadeInUp"
        style={{ animationDelay: "1s" }}
      >
        <h5>Confirmed</h5>
        {newTotal && newTotal > 0 ? <h4>[+{newTotal}]</h4> : <h4>&nbsp;</h4>}
        <h1>{total}</h1>
      </div>
      <div
        className="level-item is-blue fadeInUp"
        style={{ animationDelay: "1.1s" }}
      >
        <h5 className="heading">Active</h5>
        <h4>&nbsp;</h4>
        <h1 className="title has-text-info">{active}</h1>
      </div>
      <div
        className="level-item is-green fadeInUp"
        style={{ animationDelay: "1.2s" }}
      >
        <h5 className="heading">Recovered</h5>
        {newRecovered && newRecovered > 0 ? (
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
        {newDeath && newDeath > 0 ? <h4>[+{newDeath}]</h4> : <h4>&nbsp;</h4>}
        <h1 className="title has-text-grey">{deaths}</h1>
      </div>
    </div>
  );
};

export default QuickFacts;
