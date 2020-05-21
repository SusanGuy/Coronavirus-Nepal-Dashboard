import React, { useState, useEffect } from "react";
import axios from "../../axios";
import MainRow from "../MainRow/MainRow";
import { useWindowSize } from "react-use";
const MainTable = ({ type, search }) => {
  const [districtData, setDistrictData] = useState({
    cases: [],
    loading: true,
  });

  const [provinceData, setProvinceData] = useState({
    cases: [],
    loading: true,
  });

  useEffect(() => {
    const getDistrictData = async () => {
      try {
        const { data } = await axios.get("/districts");
        setDistrictData({
          cases: data,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    };

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

    getDistrictData();
    getProvinceData();
  }, [type]);

  const { cases: districtCases } = districtData;
  const { cases: provinceCases } = provinceData;
  const windowSize = useWindowSize();

  return (
    <div
      className="scrollable-table"
      style={
        type === 1
          ? {}
          : {
              overflow: "hidden",
            }
      }
    >
      <table className="table fadeInUp" style={{ animationDelay: "1.8s" }}>
        <thead>
          <tr>
            <th className="state-heading">
              <div className="heading-content">
                <abbr title="State">Name</abbr>
              </div>
            </th>
            <th>
              <div className="heading-content">
                <abbr className="" title="confirmed">
                  {windowSize.width <= 850 ? "Total" : "Confirmed"}
                </abbr>
              </div>
            </th>
            <th>
              <div className="heading-content">
                <abbr className="" title="active">
                  {windowSize.width <= 850 ? "Active" : "Active"}
                </abbr>
              </div>
            </th>
            <th>
              <div className="heading-content">
                <abbr className="" title="recovered">
                  {windowSize.width <= 850 ? "Recovery" : "Recovered"}
                </abbr>
              </div>
            </th>
            <th>
              <div className="heading-content">
                <abbr className="" title="deaths">
                  Death
                </abbr>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {type === 1
            ? districtCases
                .filter((dat) =>
                  dat.name.toLowerCase().includes(search.toLowerCase())
                )
                .map(({ id, ...rest }) => <MainRow key={id} {...rest} />)
            : provinceCases
                .filter((dat) =>
                  dat.name.toLowerCase().includes(search.toLowerCase())
                )
                .map(({ id, ...rest }) => <MainRow key={id} {...rest} />)}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
