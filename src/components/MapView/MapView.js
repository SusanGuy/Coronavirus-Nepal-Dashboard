import React, { useState, useEffect } from "react";
import axios from "../../axios";
import District from "./District/District";
import Province from "./Province/Province";
import Tabs from "../Tabs/Tabs";
import Box from "../Box/Box";
const MapView = () => {
  const [maps, setMap] = useState(null);
  const [districtData, setDistrictData] = useState([]);
  const [provinceData, setProvinceData] = useState([]);
  const [selectType, setSelectType] = useState(1);
  const [hoveredProvince, setHoveredProvince] = useState("");
  const [hoveredDistrict, setHoveredDistrict] = useState("");

  const colorRange = [
    "#3c0912",
    "#64111b",
    "#8e141d",
    "#b12b1b",
    "#c0573f",
  ].reverse();
  useEffect(() => {
    const getMap = async () => {
      try {
        const { data } = await axios.get("/map");
        setMap(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getDistrictData = async () => {
      try {
        const { data } = await axios.get("/districts");
        setDistrictData(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getProvinceData = async () => {
      try {
        const { data } = await axios.get("/provinces");
        setProvinceData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMap();
    getDistrictData();
    getProvinceData();
  }, []);

  let activeData = {};

  if (selectType === 1) {
    if (districtData.length > 0) {
      if (hoveredDistrict !== "" && selectType === 1) {
        const hero = districtData.find((o) => {
          return o.name.toLowerCase() === hoveredDistrict.toLowerCase();
        });
        if (hero) {
          activeData = hero;
        } else {
          activeData = districtData[0];
        }
      } else {
        activeData = districtData[0];
      }
    }
  } else {
    if (provinceData.length > 0) {
      if (hoveredProvince !== "" && selectType === 2) {
        const hero = provinceData.find((o) => {
          return o.name.toLowerCase() === hoveredProvince.toLowerCase();
        });
        if (hero) {
          activeData = hero;
        } else {
          activeData = provinceData[0];
        }
      } else {
        activeData = provinceData[0];
      }
    }
  }

  const { name, ...rest } = activeData;

  return (
    <div className="MapExplorer fadeInUp" style={{ animationDelay: "2s" }}>
      <div className="header" style={{ marginBottom: "20px" }}>
        <h1>{activeData && activeData.name}</h1>
        <h6>Hover/Click over a District/Province for more details</h6>
      </div>
      <Box {...rest} />
      <Tabs setSelectType={setSelectType} selectType={selectType} />
      {maps && (
        <React.Fragment>
          <svg id="Nepal" className="nepal-svg" viewBox="0 0 1099.919 720.688">
            <path
              className="nation_boundary"
              fill="none"
              stroke="#646464"
              strokeWidth="3.9685"
              strokeLinejoin="round"
              strokeMiterlimit="3.8637"
              d={maps.nationBoundary[0].val}
              id="path4007"
            />

            {maps.districts.map(({ district, province, symbol, val }) => {
              let h;

              let color;
              if (selectType === 1 && districtData.length > 0) {
                h = districtData.find((o) => {
                  return o.name.toLowerCase() === district.toLowerCase();
                }).total;
              } else if (selectType === 2 && provinceData.length > 0) {
                h = provinceData.find((o) => {
                  return o.name.toLowerCase() === province.toLowerCase();
                }).total;
              }

              if (selectType === 1) {
                if (h === 0) {
                  color = colorRange[0];
                } else if (h < 20) {
                  color = colorRange[1];
                } else if (h < 40) {
                  color = colorRange[2];
                } else {
                  color = colorRange[3];
                }
              } else {
                if (h === 0) {
                  color = colorRange[0];
                } else if (h < 40) {
                  color = colorRange[1];
                } else if (h < 80) {
                  color = colorRange[2];
                } else {
                  color = colorRange[3];
                }
              }

              return (
                <District
                  key={district}
                  selectType={selectType}
                  district={district}
                  province={province}
                  symbol={symbol}
                  val={val}
                  color={color}
                  hoveredProvince={hoveredProvince}
                  setHoveredProvince={setHoveredProvince}
                  hoveredDistrict={hoveredDistrict}
                  setHoveredDistrict={setHoveredDistrict}
                />
              );
            })}
            {maps.provinces.map(({ province, val }) => {
              return (
                <Province
                  key={Math.random()}
                  province={province}
                  val={val}
                  selectType={selectType}
                  setHoveredProvince={setHoveredProvince}
                />
              );
            })}
          </svg>
        </React.Fragment>
      )}
    </div>
  );
};

export default MapView;
