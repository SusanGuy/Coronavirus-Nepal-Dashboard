import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "./QuickFacts.css";
const QuickFacts = () => {
  const [facts, setFacts] = useState({
    cases: { total: "-", active: "-", recovered: "-", deaths: "-" },
    date: "",
  });

  useEffect(() => {
    const getAllFacts = async () => {
      try {
        const {
          data: { tested_positive: total, recovered, deaths, updated_at: date },
        } = await axios.get("https://nepalcorona.info/api/v1/data/nepal");

        setFacts({
          cases: {
            total,
            recovered,
            deaths,
            active: total - recovered - deaths,
          },
          date,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAllFacts();
  }, []);

  const {
    cases: { total, recovered, deaths, active },
    date,
  } = facts;

  return (
    <div className="left-body column">
      <div className="quick-stats">
        <h1>Quick Facts</h1>
        <p className="quick-facts-time">
          updated: <i className="last_updated">{moment().fromNow(date)}</i>
        </p>
        <p className="main-stats total">{total}</p>
        <p className="main-stats-footer">Total Confirmed</p>
        <p className="main-stats active">{active}</p>
        <p className="main-stats-footer">Total Active</p>
        <p className="main-stats recovered">{recovered}</p>
        <p className="main-stats-footer">Total Recovered</p>
        <p className="main-stats death">{deaths}</p>
        <p className="main-stats-footer">Total Death</p>
      </div>
    </div>
  );
};

export default QuickFacts;
