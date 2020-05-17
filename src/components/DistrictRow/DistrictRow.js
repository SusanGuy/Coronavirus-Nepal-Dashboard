import React, { useState, useEffect } from "react";
import axios from "../../axios";

const DistrictRow = ({ name, id }) => {
  const [cases, setCases] = useState({
    total: 0,
    active: 0,
    deaths: 0,
    recovered: 0,
  });

  useEffect(() => {
    const getDistrict = async (id) => {
      try {
        const {
          data: { total, activeCase, recoveredCase, deathCase },
        } = await axios.get(`/${id}`);

        setCases({
          total,
          active: activeCase,
          recovered: recoveredCase,
          death: deathCase,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getDistrict(id);
  }, [id]);

  return (
    <tr>
      <td>{name}</td>
      {Object.keys(cases)
      .map((corona) => (
        <td>{cases[corona]}</td>
      ))}
    </tr>
  );
};

export default DistrictRow;
