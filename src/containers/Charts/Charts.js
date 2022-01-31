import AgeChart from "../../components/Charts/ageChart";
import AllStatesChart from "../../components/Charts/allStates";
import DailyConfirmedChart from "../../components/Charts/dailyconfirmedchart";
import GenderChart from "../../components/Charts/genderchart";
import GrowthTrendChart from "../../components/Charts/growthTrendChart";
import TotalConfirmedChart from "../../components/Charts/totalconfirmedChart";

import axios from "axios";
import React, { useState, useEffect } from "react";

import moment from "moment";
import ownaxios from "../../axios";

function Charts() {
  const [fetched, setFetched] = useState(false);
  const [timeseries, setTimeseries] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [statesTimeSeries, setStatesTimeSeries] = useState([]);

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, [fetched]);

  const getStates = async () => {
    try {
      const [{ data: summaryData }, { data: ownData }, stateDailyResponse] =
        await Promise.all([
          axios.get("https://data.askbhunte.com/api/v1/covid/summary"),
          ownaxios.get("/chart"),
          ownaxios.get("/chart/states"),
        ]);

      ownData.forEach((l, i) => {
        const {
          date,
          dailyconfirmed,
          totalconfirmed,
          dailyrecovered,
          totalrecovered,
          dailydeceased,
          totaldeceased,
        } = ownData[i];
        ownData[i] = {
          dailyconfirmed: JSON.stringify(dailyconfirmed),
          totalconfirmed: JSON.stringify(totalconfirmed),
          dailyrecovered: JSON.stringify(dailyrecovered),
          totalrecovered: JSON.stringify(totalrecovered),
          dailydeceased: JSON.stringify(dailydeceased),
          totaldeceased: JSON.stringify(totaldeceased),
          date: moment(date).format("DD MMMM"),
        };
      });

      setTimeseries(ownData);
      setStatesTimeSeries(stateDailyResponse.data.states_daily);
      setRawData(summaryData);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cards-container">
      <section className="cards" style={{ marginTop: "100px" }}>
        <div className="card fadeInUp" style={{ animationDelay: "0.7s" }}>
          <TotalConfirmedChart title="Total Cases" timeseries={timeseries} />
        </div>

        <div className="card fadeInUp" style={{ animationDelay: "0.7s" }}>
          <DailyConfirmedChart title="Daily Cases" timeseries={timeseries} />
        </div>
        <div
          className="card card-big fadeInUp"
          style={{ animationDelay: "0.7s" }}
        >
          <AllStatesChart
            title="Total Cases by State"
            data={statesTimeSeries}
          />
        </div>

        <div className="card fadeInUp" style={{ animationDelay: "0.7s" }}>
          <GrowthTrendChart
            title="States - Growth Trend"
            data={statesTimeSeries}
          />
        </div>
        <div className="card fadeInUp" style={{ animationDelay: "0.7s" }}>
          <GenderChart title="Patient Gender" data={rawData} />
        </div>

        <div className="card fadeInUp" style={{ animationDelay: "0.7s" }}>
          <AgeChart title="Patients by Age" data={rawData} />
        </div>
      </section>
    </div>
  );
}

export default React.memo(Charts);
