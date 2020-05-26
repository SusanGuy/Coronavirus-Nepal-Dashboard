import React, { useEffect, useState } from "react";

import axios from "../../axios";

import RightContainer from "../../components/RightContainer/RightContainer";
import LeftContainer from "../../components/LeftContainer/LeftContainer";
const Home = () => {
  const [totalCases, setTotalCases] = useState([]);

  const [selectType, setSelectType] = useState(1);

  useEffect(() => {
    const getTotalData = async () => {
      try {
        const { data } = await axios.get("/");
        setTotalCases(data);
      } catch (error) {
        console.log(error);
      }
    };

    getTotalData();
  }, []);

  const calculateAdditional = (arr, field) => {
    return arr.reduce((init, current) => init + current[field], 0);
  };

  let districtCases = [];
  let provinceCases = [];
  if (totalCases.length !== 0) {
    totalCases.forEach(({ id, name, districts }) => {
      provinceCases.push({
        id,
        name,
        total: calculateAdditional(districts, "total"),
        recovered: calculateAdditional(districts, "recovered"),
        deaths: calculateAdditional(districts, "deaths"),
        active: calculateAdditional(districts, "active"),
        additionalTotal: calculateAdditional(districts, "additionalTotal"),
        additionalRecovery: calculateAdditional(
          districts,
          "additionalRecovery"
        ),
        additionalDeaths: calculateAdditional(districts, "additionalDeaths"),
      });
      districtCases.push(...districts);
    });
  }

  return (
    <div className="Home">
      <LeftContainer provinceCases={provinceCases} totalData={totalCases} />
      <RightContainer
        selectType={selectType}
        setSelectType={setSelectType}
        provinceCases={provinceCases}
        districtCases={districtCases}
      />
    </div>
  );
};

export default Home;
