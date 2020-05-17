import React, { useState, useEffect } from "react";
import axios from "../../axios";

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
  const [disricts, setDisricts] = useState([]);

  return (
    <div>
      <h1>District Cases</h1>
      {disricts.map((district) => {
        return (
          <div key={district.id}>
            <p>{district.englishTitle}</p>
            <p>{district.nepaliTitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DistrictsCharts;
