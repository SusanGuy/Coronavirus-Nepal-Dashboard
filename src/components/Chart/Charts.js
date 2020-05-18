import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Charts.css";
import DataRow from "../DataRow/DataRow";
import Spinner from "../Spinner/Spinner";
const Charts = ({ province, district }) => {
  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios.get(
          province ? "/provinces" : "/districts"
        );
        setData({
          cases: data,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAll();
  }, [province]);
  const [data, setData] = useState({
    cases: [],
    loading: true,
  });
  const { cases, loading } = data;

  return (
    <div className="stats-table">
      <div className="sorted-table__header">
        <div className="sorted-table__container">
          <h2>{province ? "Province" : "District"} COVID-19 Stats</h2>
        </div>
      </div>
      <div className="main-table-body">
        <div className="dataTables_filter">
          <label>
            <input type="search" className="" placeholder="search data" />
          </label>
        </div>
        <div className="dataTables_scroll">
          <div className="dataTables_scrollHead">
            <div className="dataTables_scrollHeadInner">
              <table className="header-table">
                <thead>
                  <tr role="row">
                    <th
                      className="name-width"
                      tabIndex="0"
                      rowSpan="1"
                      colSpan="1"
                    >
                      Name
                    </th>
                    <th
                      className="total-width"
                      tabIndex="0"
                      rowSpan="1"
                      colSpan="1"
                    >
                      Confirmed
                    </th>

                    <th
                      className="death-width"
                      tabIndex="0"
                      rowSpan="1"
                      colSpan="1"
                    >
                      Deceased
                    </th>

                    <th
                      className="recovered-width"
                      tabIndex="0"
                      rowSpan="1"
                      colSpan="1"
                    >
                      Recovered
                    </th>
                    <th
                      className="active-width"
                      tabIndex="0"
                      rowSpan="1"
                      colSpan="1"
                    >
                      Active
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div
            className={`dataTables_scrollBody ${
              province ? "province-height" : ""
            }`}
          >
            <table className="scrollable-table">
              <tbody>
                {loading ? (
                  <Spinner />
                ) : (
                  cases
                    .sort((a, b) => a.total < b.total)
                    .map(({ id, ...rest }) => <DataRow key={id} {...rest} />)
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
