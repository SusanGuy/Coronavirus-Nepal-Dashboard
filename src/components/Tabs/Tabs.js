import React from "react";
import "./tabs.scss";
const Tabs = ({ selectType, setSelectType }) => {
  return (
    <div className="tabs">
      <div
        className={`tab ${selectType === 1 ? "focused" : ""}`}
        onClick={() => {
          setSelectType(1);
        }}
      >
        <h4>{"Districts"}</h4>
      </div>
      <div
        className={`tab ${selectType === 2 ? "focused" : ""}`}
        onClick={() => {
          setSelectType(2);
        }}
      >
        <h4>{"Provinces"}</h4>
      </div>
    </div>
  );
};

export default Tabs;
