import React from "react";
import "./MainContainer.css";
import QuickFacts from "../QuickFacts/QuickFacts";
import MainChart from "../MainChart/MainChart";
const MainContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <QuickFacts />
        <MainChart />
      </div>
    </div>
  );
};

export default MainContainer;
