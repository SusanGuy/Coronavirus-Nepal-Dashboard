import React, { useState } from "react";
import * as Icon from "react-feather";
import { Phone } from "react-feather";
import "./Essentials.scss";
import axios from "../../axios";
import ContentLoader from "react-content-loader";
const Essentials = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState(null);
  const [loading, setLoading] = useState(false);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLoading(true);
        getHospitals(position);
        const { data } = await axios.get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
        );

        const ar = data.localityInfo.administrative;
        setLocation(ar[ar.length - 1].name + ", " + ar[ar.length - 2].name);

        setLoading(false);
      },
      (e) => {}
    );
  };

  const getHospitals = async (position) => {
    try {
      const { data } = await axios.post("/hospitals", {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setHospitals(data);
    } catch (e) {}
  };

  if (loading) {
    return (
      <ContentLoader
        speed={1.5}
        width={700}
        height={325}
        viewBox={`0 0 ${700} 325`}
        position="absolute"
        className="fadeInUp"
      >
        <rect x={700 / 2 - 60} y="10" rx="5" ry="5" width="120" height="32" />
        <rect
          x={700 / 2 + 70}
          y="18"
          rx="100"
          ry="100"
          width="15"
          height="15"
        />
        <rect x="10" y="80" rx="5" ry="5" width="85" height="32" />
        <rect x="100" y="80" rx="5" ry="5" width="65" height="32" />
        <rect x="10" y="130" rx="5" ry="5" width={700 - 20} height="172" />
      </ContentLoader>
    );
  }

  return (
    <React.Fragment>
      <img
        src="/essentials_2.svg"
        alt="essentials woman pushing cart"
        class="fadeInUp"
      />
      {!hospitals && (
        <React.Fragment>
          <button
            className="button fadeInUp"
            style={{ animationDelay: "0.6s" }}
            onClick={() => {
              getLocation();
            }}
          >
            <span>View Nearby Hospitals</span>
            <Icon.Compass size={16} />
          </button>
          <div className="alert fadeInUp" style={{ animationDelay: "0.7s" }}>
            <Icon.AlertOctagon size={16} />
            <div className="alert-right is-full">
              {`We do not collect any location data; they're all stored
              inside your browser and are inaccessible to us.`}
            </div>
          </div>
          <div className="alert fadeInUp" style={{ animationDelay: "0.8s" }}>
            <Icon.AlertOctagon size={16} />
            <div className="alert-right is-full">
              {`We are a community sourced listing platform and are not associated
              with any of the organizations listed below. Although we verify all
              our listings, we request you to follow all the guidelines and take
              the necessary precautions. We encourage you to report any error or
              suspicious activity so that we can take immediate action.`}
            </div>
          </div>
        </React.Fragment>
      )}

      {hospitals && (
        <React.Fragment>
          <div className="address fadeInUp" style={{ marginTop: 50 }}>
            <h3 style={{ fontSize: "14px" }}>{location}</h3>
            <Icon.XCircle
              size="16"
              onClick={() => {
                setHospitals(null);
              }}
            />
          </div>
          <div className="Search">
            <div
              className="results fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              {hospitals.map((a) => (
                <div className="essential-result">
                  <div className="result-top">
                    <div className="result-top-left">
                      <div className="result-name">{a.name}</div>
                      <div className="result-location">
                        {a.formatted_address}
                      </div>

                      <div className="result-distance">{`${a.distanceAway} km away`}</div>
                    </div>
                  </div>

                  <a
                    className="result-contact"
                    href={`tel:${a.formatted_phone_number}`}
                  >
                    <Phone />
                    <div>{a.formatted_phone_number}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Essentials;
