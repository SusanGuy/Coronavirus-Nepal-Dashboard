import React, { useState, useEffect } from "react";
import axios from "axios";
const QuickFacts = () => {
  const [facts, setFacts] = useState({
    cases: { total: 0, active: 0, recovered: 0, deaths: 0 },
    loading: true,
  });

  useEffect(() => {
    const getAllFacts = async () => {
      try {
        const {
          data: { tested_positive: total, recovered, deaths },
        } = await axios.get("https://nepalcorona.info/api/v1/data/nepal");

        setFacts({
          cases: {
            total,
            recovered,
            deaths,
            active: total - recovered - deaths,
          },
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAllFacts();
  }, []);

  const {
    cases: { total, recovered, deaths, active },
    loading,
  } = facts;

  return (
    <div>
      <h1>Total Cases</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Total: {total}</p>
          <br />
          <p>Active: {active}</p>
          <br />
          <p>Deaths: {deaths}</p>
          <br />
          <p>Recovered: {recovered}</p>
          <br />
        </div>
      )}
    </div>
  );
};

export default QuickFacts;
