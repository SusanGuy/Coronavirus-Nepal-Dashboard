import React from "react";
import "./MainChart.css";
import Chart from "../Chart/Charts";

const MainChart = () => {
  return (
    <div className="main-body column">
      <div className="row-m0">
        <Chart district />
        <Chart province />
      </div>
    </div>
  );
};

export default MainChart;
