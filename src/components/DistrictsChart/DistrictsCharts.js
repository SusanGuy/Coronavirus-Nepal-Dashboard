import React, { useState, useEffect } from "react";
import axios from "../../axios";
import DistrictRow from "../DataRow/DataRow";
const DistrictsCharts = () => {
  useEffect(() => {
    const getAllDistricts = async () => {
      try {
        const { data } = await axios.get("/");
        setDisricts({
          cases: data,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAllDistricts();
  }, []);
  const [districts, setDisricts] = useState({
    cases: [],
    loading: true,
  });
  const { cases, loading } = districts;

  return (
    <div>
      <h1>District Cases</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          style={{
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            borderSpacing: "10px",
            borderCollapse: "separate",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Total</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deceased</th>
            </tr>
          </thead>
          <tbody>
            {cases
              .sort((a, b) => a.total < b.total)
              .map(({ id, ...rest }) => {
                return <DistrictRow key={id} {...rest} />;
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DistrictsCharts;
