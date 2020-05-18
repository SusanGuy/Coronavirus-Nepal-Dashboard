import React from "react";
import "./MainContainer.css";
import Cases from "../Cases/Cases";
import MainChart from "../MainChart/MainChart";
const MainContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <Cases />
        <MainChart />
      </div>
    </div>
  );
};

export default MainContainer;
