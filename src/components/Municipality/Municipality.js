import React, { Fragment, useState, useEffect } from "react";
import axios from "../../axios";
const Municipality = () => {
  const [municipal, setMunicipal] = useState({
    cases: {},
    loading: true,
  });

  const [locationDenied, setLocationDenied] = useState(false);

  useEffect(() => {
    const getMunicipalityData = async (position) => {
      try {
        const { data } = await axios.post("/municipalities/location", {
          latitude: position.longitude,
          longitude: position.latitude,
        });
        setMunicipal({
          cases: data,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    };

    const getHighestData = async () => {
      try {
        const { data } = await axios.get("/municipalities/highest");
        setMunicipal({
          cases: data,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      }
    };

    navigator.geolocation.getCurrentPosition(
      function (position) {
        getMunicipalityData(position.coords);
      },
      () => {
        getHighestData();
        setLocationDenied(true);
      }
    );
  }, []);

  const { cases } = municipal;

  return (
    <div className="MapExplorer fadeInUp" style={{ animationDelay: "1.5s" }}>
      <div className="header">
        <h1>{cases.name && cases.name.replace("_", " ")}</h1>
        {!locationDenied ? (
          <h6>Here are some details from your nearby municipality</h6>
        ) : (
          <Fragment>
            <h6 style={{ marginBottom: "2px" }}>
              Here is the data from most infected municipality.
            </h6>
            <span
              style={{
                marginTop: "0px",
                marginBottom: "8px",
                fontSize: "10px",
                color: "red",
              }}
            >
              Please reload and allow location to view your municipality data!
            </span>
          </Fragment>
        )}
      </div>

      <div className="map-stats">
        <div className="stats fadeInUp" style={{ animationDelay: "2s" }}>
          <h5>Confirmed</h5>
          <div className="stats-bottom">
            <h1>{cases.total}</h1>
            <h6>&nbsp;</h6>
          </div>
        </div>
        <div
          className="stats is-blue fadeInUp"
          style={{ animationDelay: "2.1s" }}
        >
          <h5>Active</h5>
          <div className="stats-bottom">
            <h1>{cases.active}</h1>
            <h6>&nbsp;</h6>
          </div>
        </div>
        <div
          className="stats is-green fadeInUp"
          style={{ animationDelay: "2.2s" }}
        >
          <h5>Recovered</h5>
          <div className="stats-bottom">
            <h1>{cases.recovered}</h1>
            <h6>&nbsp;</h6>
          </div>
        </div>
        <div
          className="stats is-gray fadeInUp"
          style={{ animationDelay: "2.3s" }}
        >
          <h5>Deceased</h5>
          <div className="stats-bottom">
            <h1>{cases.deaths}</h1>
            <h6>&nbsp;</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Municipality;
