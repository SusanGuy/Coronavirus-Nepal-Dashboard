import TimeSeriesExplorer from "./components/TimeSeries/TimeSeriesExplorer";

import axios from "axios";
import ownaxios from './axios'
import React, { useState } from "react";

import { useEffectOnce } from "react-use";

function Dome({ groupedTimeline, ownData }) {
  const [states, setStates] = useState(null);

  const [activeState, setActiveState] = useState("TT");

  useEffectOnce(() => {
    getStates();
  });

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

  const getStates = async () => {
    try {
      const [{ data }] = await Promise.all([
        ownaxios.get("/chart/latest"),
      ]);

      setStates(data.statewise);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    groupedTimeline &&
    ownData && (
      <TimeSeriesExplorer
        timeseries={afnoChart[activeState]}
        activeState={activeState}
        states={states}
        setActiveState={setActiveState}
      />
    )
  );
}
export default React.memo(Dome);
