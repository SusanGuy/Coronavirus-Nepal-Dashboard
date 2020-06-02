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
  districtCases,
  provinceCases,
  mode,
  groupedTimeline,
  ownData
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

      {facts && <MapViewer dist={districtCases} {...facts}></MapViewer>}

      <Dome ownData={ownData} groupedTimeline={groupedTimeline}></Dome>
    </div >
  );
};

export default RightContainer;
