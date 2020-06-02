
import MapExplorer from './components/MapViewExplorer/MapViewExplorer';
import moment from 'moment'
import { DATA_DIR, STATE_CODES, DISTRICTS_ARRAY } from './constants';
import {

    mergeTimeseries,
    preprocessTimeseries,
    parseStateTimeseries,
    parseStateTestTimeseries,
    parseTotalTestTimeseries,
    parseDistrictZones,
} from './utils/common-functions';

import 'intersection-observer';

import axios from 'axios';
import ownaxios from './axios'
import React, { useState, useCallback, useMemo } from 'react';

import { useEffectOnce, useLocalStorage } from 'react-use';

function MapViewer({ total,
    active,
    recovered,
    deaths,
    newTotal,
    newRecovered,
    newDeath,
    date, dist }) {
    const [states, setStates] = useState(null);
    const [stateDistrictWiseData, setStateDistrictWiseData] = useState(null);
    const [districtZones, setDistrictZones] = useState(null);
    const [stateTestData, setStateTestData] = useState(null);
    const [fetched, setFetched] = useState(false);
    const [regionHighlighted, setRegionHighlighted] = useState({
        state: 'Total',
    });
    const [anchor, setAnchor] = useState(null);
    const [mapOption, setMapOption] = useState('confirmed');


    const [lastViewedLog, setLastViewedLog] = useLocalStorage(
        'lastViewedLog',
        null
    );
    const [newUpdate, setNewUpdate] = useLocalStorage('newUpdate', false);

    useEffectOnce(() => {
        getStates();
    });

    useEffectOnce(() => {
        axios
            .get('https://api.nepalcovid19.org/updatelog/log.json')
            .then((response) => {
                const lastTimestamp = response.data
                    .slice()
                    .reverse()[0]
                    .timestamp.toString();
                if (lastTimestamp !== lastViewedLog) {
                    setNewUpdate(true);
                    setLastViewedLog(lastTimestamp);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });

    const getStates = async () => {
        try {
            const [
                { data: statesDailyResponse },
                { data: zonesResponse },
            ] = await Promise.all([
                axios.get('https://api.nepalcovid19.org/states_daily.json'),
                axios.get(`${DATA_DIR}/zones.json`),
            ]);

            const [
                { data },
                { data: stateDistrictWiseResponse },
                { data: stateTestData },

            ] = await Promise.all([
                axios.get('https://api.nepalcovid19.org/latest_data.json'),
                axios.get('https://api.nepalcovid19.org/state-district-wise.json'),
                axios.get('https://api.nepalcovid19.org/state_test_data.json'),

            ]);


            const hero = []
            hero.push({
                confirmed: total,
                active: active,
                recovered: recovered,
                deaths,
                state: "Total",
                statecode: "TT",
                lastupdatedtime: moment(date).format('L HH:MM:SS').toString(),
                deltaconfirmed: newTotal,
                deltadeaths: newDeath,
                deltarecovered: newRecovered,
            })
            const { data: hamroStateData } = await ownaxios.get('/provinces')
            hamroStateData.forEach(
                (d, i) => {
                    hero.push(
                        {
                            confirmed: d.total,
                            active: d.active,
                            recovered: d.recovered,
                            deaths: d.deaths,
                            statecode: Object.keys(STATE_CODES)[i],
                            state: STATE_CODES[Object.keys(STATE_CODES)[i]],
                            lastupdatedtime: moment(date).format('L HH:MM:SS').toString(),
                            deltaconfirmed: d.additionalTotal,
                            deltadeaths: d.additionalDeaths,
                            deltarecovered: d.additionalRecovery,
                        }
                    )
                }
            )
            setStates(hero);
            setDistrictZones(parseDistrictZones(zonesResponse.zones));


            const ts = parseStateTimeseries(statesDailyResponse);
            ts['TT'] = preprocessTimeseries(data.cases_time_series);
            // Testing data timeseries
            const testTs = parseStateTestTimeseries(stateTestData.states_tested_data);
            testTs['TT'] = parseTotalTestTimeseries(data.tested);
            // Merge
            // const tsMerged = mergeTimeseries(ts, testTs);
            // // setTimeseries(tsMerged);

            // setLastUpdated(data.statewise[0].lastupdatedtime);

            const testData = [...stateTestData.states_tested_data].reverse();
            const totalTest = data.tested[data.tested.length - 1];
            testData.push({
                updatedon: totalTest.updatetimestamp.split(' ')[0],
                totaltested: totalTest.totalsamplestested,
                source: totalTest.source,
                state: 'Total',
            });
            setStateTestData(testData);
            //yo ni garnu xa
            console.log(dist);
            let o = {}

            // Object.keys(STATE_CODES).forEach(
            //     key => {
            //         const element = STATE_CODES[key]

            //     }
            // )

            DISTRICTS_ARRAY.forEach(({ state, district }) => {
                const d = dist.find(e => e.name === district)
                if (!o[state]) {
                    o[state] = {
                        districtData: {

                        }
                    }
                }
                o[state]['districtData'][district] = {
                    confirmed: d.total,
                    active: d.active,
                    recovered: d.recovered,
                    deceased: d.deaths,
                    lastupdatedtime: moment(date).format('L HH:MM:SS').toString(),
                    delta: {
                        confirmed: d.additionalTotal,
                        active: d.additionalTotal - d.additionalRecovery - d.additionalDeaths,
                        recovered: d.additionalRecovery,
                        deceased: d.additionalDeaths,
                    }
                }
            })

            console.log(o)
            console.log(stateDistrictWiseResponse);

            setStateDistrictWiseData(o);
            setFetched(true);
        } catch (err) {
            console.log(err);
        }
    };





    return (


        <React.Fragment>
            {fetched && (
                <MapExplorer
                    mapName={'Nepal'}
                    states={states}
                    districts={stateDistrictWiseData}
                    zones={districtZones}
                    stateTestData={stateTestData}
                    regionHighlighted={regionHighlighted}
                    setRegionHighlighted={setRegionHighlighted}
                    anchor={anchor}
                    setAnchor={setAnchor}
                    mapOption={mapOption}
                    setMapOption={setMapOption}
                />
            )}
        </React.Fragment>

    );
}

export default MapViewer;