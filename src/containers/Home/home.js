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

  const districtCases = totalCases.map(
    ({
      name,
      id,
      total,
      deaths,
      recovered,
      additionalDeaths,
      additionalRecovery,
      active,
      additionalTotal,
    }) => {
      return {
        name,
        id,
        total,
        deaths,
        recovered,
        additionalDeaths,
        additionalRecovery,
        additionalTotal,
        active,
      };
    }
  );

  let provinceCases = [];

  if (totalCases.length === 0) {
    provinceCases = [];
  } else {
    for (let i = 1; i < 8; i++) {
      const totalDistrictData = totalCases.filter(
        (dist) => dist.provinceId === i
      );
      provinceCases.push({
        id: i,
        name: totalDistrictData.find((dist) => dist.provinceId === i)
          .provinceName,
        total: totalDistrictData.reduce(
          (init, current) => init + current.total,
          0
        ),
        active: totalDistrictData.reduce(
          (init, current) => init + current.active,
          0
        ),
        recovered: totalDistrictData.reduce(
          (init, current) => init + current.recovered,
          0
        ),
        deaths: totalDistrictData.reduce(
          (init, current) => init + current.deaths,
          0
        ),
        additionalTotal: totalDistrictData.reduce(
          (init, current) => init + current.additionalTotal,
          0
        ),
        additionalRecovery: totalDistrictData.reduce(
          (init, current) => init + current.additionalRecovery,
          0
        ),
        additionalDeaths: totalDistrictData.reduce(
          (init, current) => init + current.additionalDeaths,
          0
        ),
      });
    }
  }

  return (
    <div className="Home">
      <LeftContainer
        provinceCases={provinceCases}
        districtCases={districtCases}
        selectType={selectType}
        setSelectType={setSelectType}
      />
      <RightContainer
        selectType={selectType}
        setSelectType={setSelectType}
        totalData={totalCases}
        provinceCases={provinceCases}
        districtCases={districtCases}
      />
    </div>
  );
};

export default Home;
