import React, { useState, useEffect } from "react";
import axios from "axios";
import ProvinceRow from "../DataRow/DataRow";
const ProvinceCharts = () => {
  useEffect(() => {
    const getAllProvinces = async () => {
      const totalData = [];
      try {
        const {
          data: {
            province: { cases, active, recovered, deaths },
          },
        } = await axios.get(
          "https://data.nepalcorona.info/api/v1/covid/summary"
        );

        for (let i = 1; i < 6; i++) {
          const totalCases = cases.find(
            (prov) => prov.province.toString() === i.toString()
          );
          const activeCases = active.find(
            (prov) => prov.province.toString() === i.toString()
          );
          const recoveredCases = recovered.find(
            (prov) => prov.province.toString() === i.toString()
          );
          const deathCases = deaths.find(
            (prov) => prov.province.toString() === i.toString()
          );

          totalData.push({
            name: i.toString(),
            total: totalCases ? totalCases.count : 0,
            active: activeCases ? activeCases.count : 0,
            recovered: recoveredCases ? recoveredCases.count : 0,
            deaths: deathCases ? deathCases.count : 0,
          });
        }

        setProvinces({
          cases: totalData,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAllProvinces();
  }, []);
  const [provinces, setProvinces] = useState({
    cases: [],
    loading: true,
  });
  const { cases, loading } = provinces;

  return (
    <div>
      <h1>Province Cases</h1>
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
              <th>Number</th>
              <th>Total</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deceased</th>
            </tr>
          </thead>
          <tbody>
            {cases.map(({ ...rest }) => {
              return <ProvinceRow key={rest.name} {...rest} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProvinceCharts;
