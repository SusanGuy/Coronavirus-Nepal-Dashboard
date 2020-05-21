import React, { Fragment, useState, useEffect } from "react";
import axios from "../../axios";
import Box from "../Box/Box";
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

  const {
    cases: { name, ...rest },
  } = municipal;

  return (
    <div className="MapExplorer fadeInUp" style={{ animationDelay: "1.5s" }}>
      <div className="header">
        <h1>{name && name.replace("_", " ")}</h1>
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

      <Box {...rest} />
    </div>
  );
};

export default Municipality;
