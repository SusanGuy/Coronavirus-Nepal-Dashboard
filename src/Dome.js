import TimeSeriesExplorer from "./components/TimeSeries/TimeSeriesExplorer";
import ownaxios from "./axios";

import axios from "axios";
import React, { useState } from "react";

import { useEffectOnce } from "react-use";

function Dome({ groupedTimeline }) {
  const [states, setStates] = useState(null);

  const [timeseries, setTimeseries] = useState(null);

  const [activeState, setActiveState] = useState("TT");

  useEffectOnce(() => {
    getStates();
  });

  const getStates = async () => {
    try {
      const [{ data }, { data: ownData }] = await Promise.all([
        axios.get("https://api.nepalcovid19.org/latest_data.json"),

        ownaxios.get("/chart"),
      ]);
      const afnoChart = {
        TT: ownData,
        P1: groupedTimeline[1],
        P2: groupedTimeline[2],
        P3: groupedTimeline[3],
        P4: groupedTimeline[4],
        P5: groupedTimeline[5],
        P6: groupedTimeline[6],
        P7: groupedTimeline[7],
      };

      setStates(data.statewise);

      setTimeseries(afnoChart);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    timeseries && (
      <TimeSeriesExplorer
        timeseries={timeseries[activeState]}
        activeState={activeState}
        states={states}
        setActiveState={setActiveState}
      />
    )
  );
}
export default Dome;
