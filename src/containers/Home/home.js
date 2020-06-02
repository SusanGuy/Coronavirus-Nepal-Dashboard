import React, { Fragment, useEffect, useState } from "react";
import _ from "lodash";
import Footer from "../../components/Footer/Footer";
import moment from "moment";
import axios from "../../axios";
import {
  handleMerge,
  calculateAdditional,
  caclulateTimeSeries,
  getTotalDiff,
} from "../../utils";
import ContentLoader from "../../components/ContentLoader/ContentLoader";
import RightContainer from "../../components/RightContainer/RightContainer";
import LeftContainer from "../../components/LeftContainer/LeftContainer";
const Home = ({ mode }) => {
  const [mainCases, setTotalCases] = useState({
    totalCases: [],
  });

  const [covidData, setCovidData] = useState([]);
  const [totalData, setTotalData] = useState(null);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    let unmounted = false;

    const getStates = async () => {
      try {
        const [
          { data: totalData },
          { data },
          { data: ownData },
        ] = await Promise.all([
          axios.get("/"),
          axios.get("https://data.nepalcorona.info/api/v1/covid"),
          axios.get("/chart"),
        ]);

        if (!unmounted) {
          setTotalCases({ totalCases: totalData });
          setCovidData(data);
          setTotalData(ownData);
          setFetched(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getStates();

    return () => {
      unmounted = true;
    };
  }, []);

  const { totalCases } = mainCases;
  let sahiCases = [];
  let districtCases = [];
  const provinceCases = [];
  let daiCases = [];
  let facts = {};
  let groupedTimeline = {};
  if (fetched) {
    sahiCases = totalCases.map((dai) => {
      const totalCases = covidData.filter((dat) => dat.district === dai.id);

      return {
        ...dai,
        ...getTotalDiff(dai.date, totalCases, {
          total: parseInt(dai.total),
          deaths: parseInt(dai.deaths),
          recovered: parseInt(dai.recovered),
        }),
      };
    });

    districtCases = sahiCases.map(
      ({ date, provinceId, provincename, ...rest }) => {
        return {
          ...rest,
        };
      }
    );
    let heroCases = {};
    sahiCases.forEach(
      ({
        provinceId,
        name,
        id,
        total,
        deaths,
        recovered,
        active,
        additionalTotal,
        additionalRecovery,
        additionalDeaths,
        additionalActive,
      }) => {
        let hero = {
          name,
          id,
          total,
          deaths,
          recovered,
          active,
          additionalTotal,
          additionalRecovery,
          additionalDeaths,
          additionalActive,
        };
        if (heroCases[provinceId]) {
          heroCases[provinceId].push(hero);
        } else {
          heroCases[provinceId] = [hero];
        }
      }
    );

    Object.keys(heroCases).forEach((province) => {
      daiCases.push({
        id: parseInt(province),
        name: totalCases.find(
          ({ provinceId }) => province.toString() === provinceId.toString()
        ).provinceName,
        districts: heroCases[province],
      });
    });

    daiCases.forEach(({ id, name, districts }) => {
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
    });

    facts = {
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

    groupedTimeline = _.mapValues(
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

    Object.keys(groupedTimeline).forEach((element) => {
      const merged = handleMerge(groupedTimeline[element]);
      groupedTimeline[element] = Object.keys(merged).map((val) => {
        return {
          date: new Date(val).setHours(0, 0, 0),

          ...merged[val],
        };
      });
    });

    groupedTimeline = caclulateTimeSeries(groupedTimeline);
  }

  return (
    <Fragment>
      <div className="Home">
        {!fetched ? (
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
              totalData={daiCases}
              ownData={totalData}
            />
            <RightContainer
              {...facts}
              date={covidData[covidData.length - 1].modifiedOn}
              ownData={totalData}
              mode={mode}
              provinceCases={provinceCases}
              groupedTimeline={groupedTimeline}
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

      <Footer />
    </Fragment>
  );
};

export default Home;
