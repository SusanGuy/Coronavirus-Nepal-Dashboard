import TimeSeriesExplorer from "./components/TimeSeries/TimeSeriesExplorer";
import ownaxios from "./axios";

import { STATE_CODES_REVERSE, DATA_DIR } from "./constants";
import {
  mergeTimeseries,
  preprocessTimeseries,
  parseStateTimeseries,
  parseStateTestTimeseries,
  parseTotalTestTimeseries,
  parseDistrictZones,
} from "./utils/common-functions";

import axios from "axios";
import React, { useState, useCallback, useMemo } from "react";
import * as Icon from "react-feather";
import { useEffectOnce, useLocalStorage } from "react-use";

function Dome({ groupedTimeline }) {
  const [states, setStates] = useState(null);
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState(null);
  const [districtZones, setDistrictZones] = useState(null);
  const [stateTestData, setStateTestData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("");
  const [timeseries, setTimeseries] = useState(null);
  const [fetched, setFetched] = useState(false);
  const [regionHighlighted, setRegionHighlighted] = useState({
    state: "Total",
  });
  const [activeState, setActiveState] = useState("TT")

  const [lastViewedLog, setLastViewedLog] = useLocalStorage(
    "lastViewedLog",
    null
  );
  const [newUpdate, setNewUpdate] = useLocalStorage("newUpdate", false);


  useEffectOnce(() => {
    getStates();
  });

  useEffectOnce(() => {
    axios
      .get("https://api.nepalcovid19.org/updatelog/log.json")
      .then((response) => {
        const lastTimestamp = response.data
          .slice()
          .reverse()[0]
          .timestamp.toString();
        if (lastTimestamp !== lastViewedLog) {
          setNewUpdate(true);
          setLastViewedLog(lastTimestamp);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const getStates = async () => {
    try {
      const [
        { data: statesDailyResponse },
        { data: zonesResponse },
      ] = await Promise.all([
        axios.get("https://api.nepalcovid19.org/states_daily.json"),
        axios.get(`${DATA_DIR}/zones.json`),
      ]);

      const [
        { data },
        { data: stateDistrictWiseResponse },
        { data: stateTestData },
        { data: ownData },
      ] = await Promise.all([
        axios.get("https://api.nepalcovid19.org/latest_data.json"),
        axios.get("https://api.nepalcovid19.org/state-district-wise.json"),
        axios.get("https://api.nepalcovid19.org/state_test_data.json"),
        ownaxios.get("/chart"),
      ]);
      setStates(data.statewise);
      setDistrictZones(parseDistrictZones(zonesResponse.zones));

      const ts = parseStateTimeseries(statesDailyResponse);
      ts["TT"] = preprocessTimeseries(data.cases_time_series);
      // Testing data timeseries
      const testTs = parseStateTestTimeseries(stateTestData.states_tested_data);
      testTs["TT"] = parseTotalTestTimeseries(data.tested);
      // Merge
      const tsMerged = mergeTimeseries(ts, testTs);

      const afnoChart = { TT: ownData, P1: groupedTimeline[1], P2: groupedTimeline[2], P3: groupedTimeline[3], P4: groupedTimeline[4], P5: groupedTimeline[5], P6: groupedTimeline[6], P7: groupedTimeline[7] }
      console.log(tsMerged);
      console.log(afnoChart);

      setTimeseries(afnoChart);
      // setTimeseries(tsMerged)
      setLastUpdated(data.statewise[0].lastupdatedtime);

      const testData = [...stateTestData.states_tested_data].reverse();
      const totalTest = data.tested[data.tested.length - 1];
      testData.push({
        updatedon: totalTest.updatetimestamp.split(" ")[0],
        totaltested: totalTest.totalsamplestested,
        source: totalTest.source,
        state: "Total",
      });
      setStateTestData(testData);

      setStateDistrictWiseData(stateDistrictWiseResponse);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(activeState);


  return (

    <React.Fragment>
      <div>
        {timeseries && (
          <TimeSeriesExplorer
            timeseries={
              timeseries[
              activeState
              ]
            }
            activeState={
              activeState
            }

            states={states}
            setActiveState={setActiveState}
          />
        )}
      </div>
    </React.Fragment>

  );
}

export default Dome;
