import React from "react";
import QuickFacts from "./components/QuickFacts/QuickFacts";
import DistrictCharts from "./components/DistrictsChart/DistrictsCharts";
import ProvinceCharts from "./components/ProvinceCharts/ProvinceCharts";
import "./App.css";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <QuickFacts />
      <DistrictCharts />
      <ProvinceCharts />
    </div>
  );
}

export default App;
