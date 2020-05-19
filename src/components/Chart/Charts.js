import React, { useState } from "react";

import "./Charts.css";
import DataRow from "../DataRow/DataRow";
import Spinner from "../Spinner/Spinner";
const Charts = ({
  province,
  district,
  favorites,
  loading,
  cases,
  setFavorites,
}) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (value) => {
    setKeyword(value);
  };

  if (favorites) {
    return (
      <div className="stats-table">
        <div className="sorted-table__header">
          <div className="sorted-table__container">
            <h2>Saved Stats</h2>
          </div>
        </div>
        <div className="main-table-body">
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
              {loading ? (
                <Spinner />
              ) : (
                <table className="scrollable-table">
                  <tbody>
                    {cases.map(({ id, ...rest }) => (
                      <DataRow setFavorites={setFavorites} key={id} {...rest} />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="stats-table">
      <div className="sorted-table__header">
        <div className="sorted-table__container">
          <h2>{province ? "Province" : "District"} COVID-19 Stats</h2>
        </div>
      </div>
      <div className="main-table-body">
        {!province && (
          <div className="dataTables_filter">
            <label>
              <input
                type="search"
                onChange={(e) => handleChange(e.target.value)}
                className=""
                placeholder="search data"
              />
            </label>
          </div>
        )}
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
            {loading ? (
              <Spinner />
            ) : (
              <table className="scrollable-table">
                <tbody>
                  {!province
                    ? cases
                        .filter((name) =>
                          name.name
                            .toLowerCase()
                            .includes(keyword.toLowerCase())
                        )
                        .sort((a, b) => a.total < b.total)
                        .map(({ id, ...rest }) => (
                          <DataRow
                            setFavorites={setFavorites}
                            key={id}
                            {...rest}
                          />
                        ))
                    : cases.map(({ id, ...rest }) => (
                        <DataRow
                          setFavorites={setFavorites}
                          key={id}
                          {...rest}
                        />
                      ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
