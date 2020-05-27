import React from "react";
import Tabs from "../Tabs/Tabs";
import TimeSeriesExplorer from '../TimeSeries/TimeSeriesExplorer'
import Dome from '../../Dome'
import MapView from "../MapView/MapView";
const RightContainer = ({
  selectType,
  setSelectType,
  districtCases,
  provinceCases,
  mode,
  groupedTimeline
}) => {
  return (
    <div className="home-right">
      <MapView
        selectType={selectType}
        districtData={districtCases}
        provinceData={provinceCases}
        mode={mode}
      />
      <Tabs selectType={selectType} setSelectType={setSelectType} />
      <Dome groupedTimeline={groupedTimeline}></Dome>
    </div>
  );
};

export default RightContainer;
