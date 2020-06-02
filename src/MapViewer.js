import MapExplorer from "./components/MapViewExplorer/MapViewExplorer";
import moment from "moment";
import { DATA_DIR, STATE_CODES, DISTRICTS_ARRAY } from "./constants";
import { parseDistrictZones } from "./utils/common-functions";

import "intersection-observer";

import axios from "axios";

import React, { useState } from "react";

import { useEffectOnce } from "react-use";

function MapViewer({
  total,
  active,
  recovered,
  deaths,
  newTotal,
  newRecovered,
  newDeath,
  date,
  dist,
  prov,
}) {
  const [states, setStates] = useState(null);
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState(null);
  const [districtZones, setDistrictZones] = useState(null);

  const [fetched, setFetched] = useState(false);
  const [regionHighlighted, setRegionHighlighted] = useState({
    state: "Total",
  });

  const [mapOption, setMapOption] = useState("confirmed");

  useEffectOnce(() => {
    getStates();
  });

  const getStates = async () => {
    try {
      const [{ data: zonesResponse }] = await Promise.all([
        axios.get(`${DATA_DIR}/zones.json`),
      ]);

      const hero = [];
      hero.push({
        confirmed: total,
        active: active,
        recovered: recovered,
        deaths,
        state: "Total",
        statecode: "TT",
        lastupdatedtime: moment(date).format("L HH:MM:SS").toString(),
        deltaconfirmed: newTotal,
        deltadeaths: newDeath,
        deltarecovered: newRecovered,
      });

      prov.forEach((d, i) => {
        hero.push({
          confirmed: d.total,
          active: d.active,
          recovered: d.recovered,
          deaths: d.deaths,
          statecode: Object.keys(STATE_CODES)[i],
          state: STATE_CODES[Object.keys(STATE_CODES)[i]],
          lastupdatedtime: moment(date).format("L HH:MM:SS").toString(),
          deltaconfirmed: d.additionalTotal,
          deltadeaths: d.additionalDeaths,
          deltarecovered: d.additionalRecovery,
        });
      });
      setStates(hero);
      setDistrictZones(parseDistrictZones(zonesResponse.zones));

      let o = {};

      DISTRICTS_ARRAY.forEach(({ state, district }) => {
        const d = dist.find((e) => e.name === district);
        if (!o[state]) {
          o[state] = {
            districtData: {},
          };
        }
        o[state]["districtData"][district] = {
          confirmed: d.total,
          active: d.active,
          recovered: d.recovered,
          deceased: d.deaths,
          lastupdatedtime: moment(date).format("L HH:MM:SS").toString(),
          delta: {
            confirmed: d.additionalTotal,
            active:
              d.additionalTotal - d.additionalRecovery - d.additionalDeaths,
            recovered: d.additionalRecovery,
            deceased: d.additionalDeaths,
          },
        };
      });
      setStateDistrictWiseData(o);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      {fetched && (
        <MapExplorer
          mapName={"Nepal"}
          states={states}
          districts={stateDistrictWiseData}
          zones={districtZones}
          regionHighlighted={regionHighlighted}
          setRegionHighlighted={setRegionHighlighted}
          mapOption={mapOption}
          setMapOption={setMapOption}
        />
      )}
    </React.Fragment>
  );
}

export default MapViewer;
