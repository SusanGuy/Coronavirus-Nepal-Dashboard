import React, { useState, useEffect } from "react";
import QuickFacts from "../QuickFacts/QuickFacts";
import MiniGraph from "../MiniGraph/MiniGraph";
import MapView from "../MapView/MapView";
import moment from "moment";
import axios from "axios";
const LeftContainer = ({ districtCases, provinceCases }) => {
  const [facts, setFacts] = useState({
    cases: { total: 0, active: 0, recovered: 0, deaths: 0 },
    date: "",
  });

  useEffect(() => {
    const getAllFacts = async () => {
      try {
        const {
          data: { tested_positive: total, recovered, deaths },
        } = await axios.get("https://nepalcorona.info/api/v1/data/nepal");

        const { data } = await axios.get(
          "https://data.nepalcorona.info/api/v1/covid"
        );
        let date;

        if (data.length !== total) {
          date = new Date();
        } else {
          date = data[data.length - 1].modifiedOn;
        }

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
          <h5>Updated {moment(new Date(date)).fromNow()}</h5>
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
        Compiled from Ministry of Health & Population of Nepal
      </h5>
      <MapView districtData={districtCases} provinceData={provinceCases} />
    </div>
  );
};

export default LeftContainer;
