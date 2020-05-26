import React, { useState, useEffect } from "react";
import QuickFacts from "../QuickFacts/QuickFacts";
import MiniGraph from "../MiniGraph/MiniGraph";
import MainTable from "../MainTable/MainTable";
import Municipality from "../Municipality/Municipality";
import moment from "moment";
import axios from "axios";
const LeftContainer = ({ total, active, recovered, deaths, ...props }) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const getAllFacts = async () => {
      try {
        const { data } = await axios.get(
          "https://data.nepalcorona.info/api/v1/covid"
        );
        let date;

        if (data.length !== total) {
          date = new Date();
        } else {
          date = data[data.length - 1].modifiedOn;
        }

        setDate(date);
      } catch (error) {
        console.log(error);
      }
    };

    getAllFacts();
  }, [total]);

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
      <MainTable {...props} />
      <Municipality />
    </div>
  );
};

export default LeftContainer;
