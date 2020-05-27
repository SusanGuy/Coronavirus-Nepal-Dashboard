import React, { Fragment, useEffect, useState } from "react";
import _ from "lodash";
import moment from "moment";
import axios from "../../axios";
import ContentLoader from "../../components/ContentLoader/ContentLoader";
import RightContainer from "../../components/RightContainer/RightContainer";
import LeftContainer from "../../components/LeftContainer/LeftContainer";
const Home = ({ mode }) => {
  const [mainCases, setTotalCases] = useState({
    totalCases: [],
    loading: true,
  });

  const [selectType, setSelectType] = useState(2);
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const getTotalData = async () => {
      try {
        const { data } = await axios.get("/");
        if (!unmounted) {
          setTotalCases({ totalCases: data, loading: false });
        }
      } catch (error) {
        setTotalCases({ totalCases: [], loading: false });
        console.log(error);
      }
    };
    const getAllFacts = async () => {
      try {
        const { data } = await axios.get(
          "https://data.nepalcorona.info/api/v1/covid"
        );
        if (!unmounted) {
          setCovidData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllFacts();
    getTotalData();

    return () => {
      unmounted = true;
    };
  }, []);

  const calculateAdditional = (arr, field) => {
    return arr.reduce((init, current) => init + current[field], 0);
  };

  const { totalCases, loading } = mainCases;

  let districtCases = [];
  let provinceCases = [];
  if (totalCases.length !== 0) {
    totalCases.forEach(({ id, name, districts }) => {
      provinceCases.push({
        id,
        name,
        total: calculateAdditional(districts, "total"),
        recovered: calculateAdditional(districts, "recovered"),
        deaths: calculateAdditional(districts, "deaths"),
        active: calculateAdditional(districts, "active"),
        additionalTotal: calculateAdditional(districts, "additionalTotal"),
        additionalRecovery: calculateAdditional(
          districts,
          "additionalRecovery"
        ),
        additionalDeaths: calculateAdditional(districts, "additionalDeaths"),
        additionalActive: calculateAdditional(districts, "additionalActive"),
      });
      districtCases.push(...districts);
    });
  }

  const facts = {
    total: districtCases.reduce((init, current) => init + current.total, 0),
    recovered: districtCases.reduce(
      (init, current) => init + current.recovered,
      0
    ),
    active: districtCases.reduce((init, current) => init + current.active, 0),
    deaths: districtCases.reduce((init, current) => init + current.deaths, 0),
    newTotal: districtCases.reduce(
      (init, current) => init + current.additionalTotal,
      0
    ),
    newRecovered: districtCases.reduce(
      (init, current) => init + current.additionalRecovery,
      0
    ),
    newDeath: districtCases.reduce(
      (init, current) => init + current.additionalDeaths,
      0
    ),
    newActive: districtCases.reduce(
      (init, current) => init + current.additionalActive,
      0
    ),
  };

  let groupedTimeline = _.mapValues(
    _.groupBy(
      covidData.map((dat) => {
        return {
          ...dat,
          createdOn: moment(new Date(dat.createdOn)).format("YYYY-MM-DD"),
        };
      }),
      "province"
    ),
    (clist) => clist.map((data) => _.omit(data, "province"))
  );
  const handleMerge = (arr) => {
    const khali = {};
    arr.forEach((arr) => {
      if (khali[arr.createdOn]) {
        let total = khali[arr.createdOn].total;
        let recovered = khali[arr.createdOn].recovered;
        let deaths = khali[arr.createdOn].deaths;

        khali[arr.createdOn].total = total + 1;
        khali[arr.createdOn].recovered =
          arr.recoveredOn !== null ? recovered + 1 : recovered;
        khali[arr.createdOn].deaths =
          arr.deathOn !== null ? deaths + 1 : deaths;
        khali[arr.createdOn].active = total - recovered - deaths;
      } else {
        let total = 1;
        let recovered = arr.recoveredOn !== null ? 1 : 0;
        let deaths = arr.deathOn !== null ? 1 : 0;
        khali[arr.createdOn] = {
          total,
          recovered,
          deaths,
          active: total - recovered - deaths,
        };
      }
    });
    return khali;
  };

  Object.keys(groupedTimeline).forEach((element) => {
    const merged = handleMerge(groupedTimeline[element]);
    groupedTimeline[element] = Object.keys(merged).map((val) => {
      return {
        date: val,

        ...merged[val],
      };
    });
  });

  return (
    <div className="Home">
      {loading ? (
        <ContentLoader />
      ) : (
        <Fragment>
          <LeftContainer
            {...facts}
            date={
              covidData.length !== facts.total
                ? new Date()
                : covidData[covidData.length - 1].modifiedOn
            }
            provinceCases={provinceCases}
            totalData={totalCases}
          />
          <RightContainer
            {...facts}
            mode={mode}
            selectType={selectType}
            setSelectType={setSelectType}
            provinceCases={provinceCases}
            districtCases={districtCases.sort((a, b) => {
              if (a.total < b.total) {
                return 1;
              } else if (a.total > b.total) {
                return -1;
              } else {
                return 0;
              }
            })}
          />
        </Fragment>
      )}
    </div>
  );
};

export default Home;
