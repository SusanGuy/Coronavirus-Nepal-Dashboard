import React, { useState, useEffect } from "react";
import QuickFacts from "../QuickFacts/QuickFacts";
import MiniGraph from "../MiniGraph/MiniGraph";
import moment from "moment";
import Municipality from "../Municipality/Municipality";
import axios from "axios";
const LeftContainer = () => {
  const [facts, setFacts] = useState({
    cases: { total: 0, active: 0, recovered: 0, deaths: 0 },
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
    <div className="home-left">
      <div className="header fadeInUp" style={{ animationDelay: "1s" }}>
        <div className="actions">
          <h5>
            Updated at {moment(date).format("dddd, MMMM Do YYYY")}{" "}
            {moment(date).format("hh:mm a")}
          </h5>
        </div>
      </div>
      <QuickFacts
        total={total}
        recovered={recovered}
        deaths={deaths}
        active={active}
        date={date}
      />
      <MiniGraph />
      <h5
        className="table-fineprint fadeInUp"
        style={{ animationDelay: "1.5s" }}
      >
        Compiled from Nepal Health Ministry,
      </h5>
      <Municipality />
    </div>
  );
};

export default LeftContainer;
