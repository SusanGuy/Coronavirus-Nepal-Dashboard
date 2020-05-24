import React, { useEffect, useState } from "react";

import axios from "../../axios";

import RightContainer from "../../components/RightContainer/RightContainer";
import LeftContainer from "../../components/LeftContainer/LeftContainer";
const Home = () => {
  const [districtCases, setDistrictCases] = useState([]);
  const [provinceCases, setProvinceCases] = useState([]);
  const [selectType, setSelectType] = useState(1);

  useEffect(() => {
    const getDistrictData = async () => {
      try {
        const { data } = await axios.get("/districts");
        setDistrictCases(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getProvinceData = async () => {
      try {
        const { data } = await axios.get("/provinces");
        setProvinceCases(data);
      } catch (error) {
        console.log(error);
      }
    };

    getDistrictData();
    getProvinceData();
  }, []);

  return (
    <div className="Home">
      <LeftContainer
        selectType={selectType}
        setSelectType={setSelectType}
        districtCases={districtCases}
        provinceCases={provinceCases}
      />
      <RightContainer
        selectType={selectType}
        setSelectType={setSelectType}
        districtCases={districtCases}
        provinceCases={provinceCases}
      />
    </div>
  );
};

export default Home;
