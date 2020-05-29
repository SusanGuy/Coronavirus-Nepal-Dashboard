import React, { useState, useEffect } from "react";
import axios from "../../axios";
import District from "./District/District";
import Province from "./Province/Province";
import Tabs from "../Tabs/Tabs";
import Box from "../Box/Box";
const MapView = ({
  setSelectType,
  districtData,
  provinceData,
  selectType,
  mode,
}) => {
  const [maps, setMap] = useState(null);

  const [hoveredProvince, setHoveredProvince] = useState("");
  const [hoveredDistrict, setHoveredDistrict] = useState("");

  let colorRange = ["#E8FFAA", "#FFD666", "#FF9144", "#FF073A"];
  useEffect(() => {
    const getMap = async () => {
      try {
        const { data } = await axios.get("/map");
        setMap(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMap();
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

  if (mode === true) {
    colorRange = ["#2A0021", "#800021", "#AA0000", "#CB3E3E"];
  }

  const { name, ...rest } = activeData;

  return (
    <div className="MapExplorer fadeInUp" style={{ animationDelay: "2s" }}>
      <div className="header" style={{ marginBottom: "20px" }}>
        <h1>{activeData && activeData.name}</h1>
        <h6>Hover/Click over a District/Province for more details</h6>
      </div>
      <Box {...rest} />
      <Tabs selectType={selectType} setSelectType={setSelectType} />

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
            <path id="svg_14"
              fill="none"
              stroke="#646464"
              strokeWidth="3.9685"
              strokeLinejoin="round"
              strokeMiterlimit="3.8637"
              d="m135.04964,120.15902c-3.48999,-1.03407 -3.48999,-1.03407 -3.5934,-1.11162c0.10341,0.07755 -2.86955,-6.64391 -2.97295,-6.72146c0.10341,0.07755 -8.6862,-11.68501 -8.7896,-11.76256c0.10341,0.07755 -0.67215,-1.60282 -5.97176,-4.05874c-5.29961,-2.45592 -2.1974,5.94591 -5.29961,-2.45592c-3.10221,-8.40183 -3.10221,-8.40183 -3.20562,-8.47937c0.10341,0.07755 0.49118,-8.19502 -3.25732,-6.25614c-3.74851,1.93888 -1.03407,1.93888 -3.74851,1.93888c-2.71444,0 -2.71444,0 -2.81784,-0.07755c0.10341,0.07755 2.30081,-3.02467 2.1974,-3.10221c0.10341,0.07755 2.30081,-2.37837 4.62747,-2.37837c2.32666,0 2.32666,0 2.22325,-0.07755c0.10341,0.07755 -5.71324,-1.99059 4.36895,4.21383c10.08219,6.20442 1.93888,-3.87777 10.08219,6.20442c8.14331,10.08219 10.21145,11.76256 10.21145,11.76256c0,0 4.26554,-2.58518 5.0411,0c0.77555,2.58518 0,3.48999 0.77555,2.58518c0.77555,-0.90481 0.77555,-0.90481 0.67215,-0.98236c0.10341,0.07755 1.52525,-1.3443 4.62747,1.62865c3.10221,2.97295 3.10221,1.80962 3.10221,2.97295c0,1.16333 -1.29259,0.64629 0,1.16333c1.29259,0.51704 1.29259,0.51704 1.18918,0.43949c0.10341,0.07755 1.13748,-3.28318 4.88598,-1.3443c3.74851,1.93888 1.16333,-0.38778 3.74851,1.93888c2.58518,2.32666 2.58518,2.32666 2.48177,2.24911c0.10341,0.07755 0.49118,3.0505 0.49118,3.0505c0,0 1.80962,3.61925 1.70622,3.5417" />

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

              // h = Math.random() * 100

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
                if (h < 25) {
                  color = colorRange[0];
                } else if (h < 50) {
                  color = colorRange[1];
                } else if (h < 100) {
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
