import React, { useState } from "react";
import MainRow from "../MainRow/MainRow";
import Header from "../TableHeader/Header";
const MainTable = ({ totalData, provinceCases }) => {
  const districtBody = {
    total: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
  };
  const [sortData, setSortData] = useState({
    sortColumn: "total",
    isAscending: false,
  });

  const { sortColumn, isAscending } = sortData;

  const handleSort = (arr) => {
    return arr.sort((a, b) => {
      if (a[sortColumn] > b[sortColumn]) {
        return isAscending ? 1 : -1;
      } else if (a[sortColumn] < b[sortColumn]) {
        return isAscending ? -1 : 1;
      } else {
        return 0;
      }
    });
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
          <Header {...sortData} setSortData={setSortData} state />
        </tr>
      </thead>
      <tbody>
        {handleSort(provinceCases).map(({ id, ...rest }) => (
          <MainRow
            districts={totalData.find((dat) => dat.id === id).districts}
            key={id}
            {...rest}
          />
        ))}
      </tbody>
      <tbody>
        <MainRow name="Total" mama="is-total" {...districtBody} />
      </tbody>
    </table>
  );
};

export default MainTable;
