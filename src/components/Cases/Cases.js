import React from "react";
import "./Cases.css";
import QuickFacts from "../QuickFacts/QuickFacts";
const Cases = () => {
  return (
    <div className="left-body column">
      <QuickFacts quickFacts />
      <QuickFacts municipality />
    </div>
  );
};

export default Cases;
