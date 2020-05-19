import React, { useState, useEffect } from "react";
import "./MainChart.css";
import Chart from "../Chart/Charts";
import axios from "../../axios";

const MainChart = () => {
  const [favorites, setFavorites] = useState([]);
  const [province, setProvinceData] = useState({
    cases: [],
    loading: true,
  });
  const [districts, setDistrictsData] = useState({
    cases: [],
    loading: true,
  });

  useEffect(() => {
    const getProvinceData = async () => {
      try {
        const { data } = await axios.get("/provinces");
        setProvinceData({
          cases: data,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    };
    const getDistrictData = async () => {
      try {
        const { data } = await axios.get("/districts");
        setDistrictsData({
          cases: data,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getProvinceData();
    getDistrictData();
    let data = localStorage.getItem("saved");
    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  return (
    <div className="main-body column">
      <div className="row-m0">
        {favorites.length !== 0 && (
          <Chart setFavorites={setFavorites} favorites cases={favorites} />
        )}
        <Chart
          loading={districts.loading}
          cases={districts.cases}
          setFavorites={setFavorites}
          district
        />
        <Chart
          loading={province.loading}
          cases={province.cases}
          setFavorites={setFavorites}
          province
        />
      </div>
    </div>
  );
};

export default MainChart;
