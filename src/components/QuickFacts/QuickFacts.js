import React, { Fragment, useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import axios2 from "../../axios";
import Spinner from "../Spinner/Spinner";
import "./QuickFacts.css";
const QuickFacts = ({ municipality, quickFacts }) => {
  const [facts, setFacts] = useState({
    cases: { total: "-", active: "-", recovered: "-", deaths: "-" },
    date: "",
  });
  const [municipal, setMunicipal] = useState({
    cases: {},
    loading: true,
  });

  let body;

  const getMunicipalityData = async (position) => {
    try {
      const { data } = await axios2.post("/location", {
        latitude: position.latitude,
        longitude: position.longitude,
      });
      setMunicipal({
        cases: data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllFacts = async () => {
      try {
        const {
          data: { tested_positive: total, recovered, deaths, updated_at: date },
        } = await axios.get("https://nepalcorona.info/api/v1/data/nepal");

        setFacts({
          cases: {
            total,
            recovered,
            deaths,
            active: total - recovered - deaths,
          },
          date,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (quickFacts) {
      getAllFacts();
    } else {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          getMunicipalityData(position.coords);
        },
        () => {
          setMunicipal({
            cases: {},
            loading: false,
          });
        }
      );
    }
  }, [quickFacts]);
  const handleButtonChange = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setMunicipal({
          ...municipal,
          loading: true,
        });
        getMunicipalityData(position.coords);
      },
      () => {
        setMunicipal({
          cases: {},
          loading: false,
        });
      }
    );
  };

  const {
    cases: { total, recovered, deaths, active },
    date,
  } = facts;

  if (quickFacts) {
    body = (
      <Fragment>
        <h1>Quick Facts</h1>
        <p className="quick-facts-time">
          updated: <i className="last_updated">{moment().fromNow(date)}</i>
        </p>
        <p className="main-stats total">{total}</p>
        <p className="main-stats-footer">Total Confirmed</p>
        <p className="main-stats active">{active}</p>
        <p className="main-stats-footer">Total Active</p>
        <p className="main-stats recovered">{recovered}</p>
        <p className="main-stats-footer">Total Recovered</p>
        <p className="main-stats death">{deaths}</p>
        <p className="main-stats-footer">Total Death</p>
      </Fragment>
    );
  } else {
    if (municipal.loading) {
      body = <Spinner />;
    } else if (
      !municipal.loading &&
      Object.keys(municipal.cases).length === 0
    ) {
      body = (
        <Fragment>
          <h1> Cases in your municipality</h1>

          <div className="main-stats">
            <button
              className="location-button"
              onClick={() => handleButtonChange()}
            >
              Allow Location Access
            </button>
          </div>
          <p className="main-stats total">-</p>
          <p className="main-stats-footer">Total Confirmed</p>
          <p className="main-stats active">-</p>
          <p className="main-stats-footer">Total Active</p>
          <p className="main-stats recovered">-</p>
          <p className="main-stats-footer">Total Recovered</p>
          <p className="main-stats death">-</p>
          <p className="main-stats-footer">Total Death</p>
        </Fragment>
      );
    } else {
      body = (
        <Fragment>
          <h1> {municipal.cases.name} municipality</h1>

          <p className="main-stats total">{municipal.cases.total}</p>
          <p className="main-stats-footer">Total Confirmed</p>
          <p className="main-stats active">{municipal.cases.active}</p>
          <p className="main-stats-footer">Total Active</p>
          <p className="main-stats recovered">{municipal.cases.recovered}</p>
          <p className="main-stats-footer">Total Recovered</p>
          <p className="main-stats death">{municipal.cases.deaths}</p>
          <p className="main-stats-footer">Total Death</p>
        </Fragment>
      );
    }
  }

  return (
    <div className={`quick-stats ${municipality && "municipality"}`}>
      {body}
    </div>
  );
};

export default QuickFacts;
