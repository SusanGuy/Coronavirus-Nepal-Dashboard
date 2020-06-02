import React from "react";
import MapViewer from '../../MapViewer'
import Dome from "../../Dome";
import MapView from "../MapView/MapView";
const RightContainer = ({
  total,
  active,
  recovered,
  deaths,
  newTotal,
  newRecovered,
  newDeath,
  date,
  selectType,
  setSelectType,
  districtCases,
  provinceCases,
  mode,
  groupedTimeline,
}) => {
  const facts = {
    total,
    active,
    recovered,
    deaths,
    newTotal,
    newRecovered,
    newDeath, date
  }
  return (
    <div className="home-right">
      {//<MapView
        //   selectType={selectType}
        //   setSelectType={setSelectType}
        //   districtData={districtCases}
        //   provinceData={provinceCases}
        //   mode={mode}
        // />
      }

      {facts && <MapViewer dist={districtCases} {...facts}></MapViewer>}

      <Dome facts={facts} date={date} groupedTimeline={groupedTimeline}></Dome>
    </div >
  );
};

export default RightContainer;
