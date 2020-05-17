import React, { useState, useEffect } from "react";
import axios from "../../axios";
import DistrictRow from "../DistrictRow/DistrictRow";
const DistrictsCharts = () => {
  useEffect(() => {
    const getAllDistricts = async () => {
      try {
        const { data } = await axios.get("/");
        console.log(data);
        setDisricts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllDistricts();
  }, []);
  const [districts, setDisricts] = useState([]);

  return (
    <div>
      <h1>District Cases</h1>
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
            <th>Deceased</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {districts.map(({ id, englishTitle }) => {
            return <DistrictRow key={id} id={id} name={englishTitle} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DistrictsCharts;
