import React from "react";
import Tabs from "../Tabs/Tabs";

import MapView from "../MapView/MapView";
const RightContainer = ({
  selectType,
  setSelectType,
  districtCases,
  provinceCases,
  mode
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
    </div>
  );
};

export default RightContainer;
