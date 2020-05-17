import React from "react";
import QuickFacts from "./components/QuickFacts/QuickFacts";
import DistrictCharts from "./components/DistrictsChart/DistrictsCharts";
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
    </div>
  );
}

export default App;
