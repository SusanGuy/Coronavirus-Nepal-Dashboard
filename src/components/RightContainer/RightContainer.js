import React from "react";

import Dome from "../../Dome";
import MapView from "../MapView/MapView";
const RightContainer = ({
  ownData,
  selectType,
  setSelectType,
  districtCases,
  provinceCases,
  mode,
  groupedTimeline,
}) => {
  return (
    <div className="home-right">
      <MapView
        selectType={selectType}
        setSelectType={setSelectType}
        districtData={districtCases}
        provinceData={provinceCases}
        mode={mode}
      />

      <Dome ownData={ownData} groupedTimeline={groupedTimeline}></Dome>
    </div>
  );
};

export default React.memo(RightContainer);
