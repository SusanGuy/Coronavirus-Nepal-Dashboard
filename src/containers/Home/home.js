import React, { Fragment, useEffect, useState } from "react";
import _ from "lodash";
import Footer from "../../components/Footer/Footer";
import ContentLoader from "../../components/ContentLoader/ContentLoader";
import moment from "moment";
import QuickFacts from "../../components/QuickFacts/QuickFacts";
import MiniGraph from "../../components/MiniGraph/MiniGraph";
import MainTable from "../../components/MainTable/MainTable";
import Municipality from "../../components/Municipality/Municipality";
import axios from "../../axios";
import MapViewer from "../../MapViewer";
import Dome from "../../Dome";
import {
  handleMerge,
  calculateAdditional,
  caclulateTimeSeries,
  getTotalDiff,
} from "../../utils";

const Home = () => {
  const [totalCases, setTotalCases] = useState(null);

  const [covidData, setCovidData] = useState(null);
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
          setTotalCases(totalData);
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

  let date = new Date();

  if (covidData && covidData.length === facts.total) {
    date = covidData[covidData.length - 1].modifiedOn;
  }

  return (
    <Fragment>
      <div className="Home">
        {!fetched ? (
          <ContentLoader />
        ) : (
          <Fragment>
            <div className="home-left">
              <div className="header fadeInUp" style={{ animationDelay: "1s" }}>
                <div className="actions">
                  {covidData && (
                    <h5>Updated {moment(new Date(date)).fromNow()}</h5>
                  )}
                </div>
              </div>
              <QuickFacts date={date} {...facts} />
              <MiniGraph timeseries={totalData} />
              <h5
                className="table-fineprint fadeInUp"
                style={{ animationDelay: "1.5s" }}
              >
                Compiled from Ministry of Health & Population of Nepal
              </h5>

              <MainTable
                date={date}
                total={facts.total}
                active={facts.active}
                recovered={facts.recovered}
                deaths={facts.deaths}
                additionalTotal={facts.newTotal}
                additionalActive={facts.newActive}
                additionalRecovery={facts.newRecovered}
                additionalDeaths={facts.newDeath}
                provinceCases={provinceCases}
                totalData={daiCases}
              />

              <Municipality />
            </div>
            <div className="home-right">
              <MapViewer
                prov={provinceCases}
                dist={districtCases}
                {...facts}
                date={date}
              ></MapViewer>

              <Dome
                ownData={totalData}
                groupedTimeline={groupedTimeline}
              ></Dome>
            </div>
          </Fragment>
        )}
      </div>

      <Footer />
    </Fragment>
  );
};

export default Home;
