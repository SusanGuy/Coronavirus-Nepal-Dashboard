import React from "react";
import MainRow from "../MainRow/MainRow";
import Header from "../TableHeader/Header";
const MainTable = ({ totalData, provinceCases }) => {
  const districtBody = {
    total: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
  };

  provinceCases.forEach((dist) => {
    districtBody.total = districtBody.total + dist.total;
    districtBody.recovered = districtBody.recovered + dist.recovered;
    districtBody.deaths = districtBody.deaths + dist.deaths;
    districtBody.active = districtBody.active + dist.active;
  });

  return (
    <table className="table fadeInUp" style={{ animationDelay: "1.8s" }}>
      <thead>
        <tr>
          <Header state />
        </tr>
      </thead>
      <tbody>
        {provinceCases.map(({ id, ...rest }) => (
          <MainRow key={id} {...rest} />
        ))}
      </tbody>
      <tbody>
        <MainRow name="Total" mama="is-total" {...districtBody} />
      </tbody>
    </table>
  );
};

export default MainTable;
