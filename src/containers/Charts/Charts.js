import AgeChart from '../../components/Charts/ageChart';
// import AllStatesChart from './Charts/allstates';
import DailyConfirmedChart from '../../components/Charts/dailyconfirmedchart';
import GenderChart from '../../components/Charts/genderchart';
// import GrowthTrendChart from './Charts/growthtrendchart';
// import NationalityChart from './Charts/nationalitychart';
import TotalConfirmedChart from '../../components/Charts/totalconfirmedChart'

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment'
import ownaxios from '../../axios'

function Charts() {
    const [fetched, setFetched] = useState(false);
    const [timeseries, setTimeseries] = useState([]);
    const [rawData, setRawData] = useState([]);
    const [statesTimeSeries, setStatesTimeSeries] = useState([]);

    useEffect(() => {
        if (fetched === false) {
            getStates();
        }
    }, [fetched]);

    const getStates = async () => {
        try {
            const [
                response,
                rawDataResponse,
                stateDailyResponse,
                { data: summaryData },
                { data: ownData }
            ] = await Promise.all([
                axios.get('https://api.nepalcovid19.org/latest_data.json'),
                axios.get('https://api.nepalcovid19.org/raw_latest_data.json'),
                axios.get('https://api.nepalcovid19.org/states_daily.json'),
                axios.get('https://data.nepalcorona.info/api/v1/covid/summary'),
                ownaxios.get('/chart')
            ]);

            ownData.forEach((l, i) => {
                const { date, dailyconfirmed, totalconfirmed, dailyrecovered, totalrecovered, dailydeceased, totaldeceased } = ownData[i]
                ownData[i] = {
                    dailyconfirmed: JSON.stringify(dailyconfirmed),
                    totalconfirmed: JSON.stringify(totalconfirmed),
                    dailyrecovered: JSON.stringify(dailyrecovered),
                    totalrecovered: JSON.stringify(totalrecovered),
                    dailydeceased: JSON.stringify(dailydeceased),
                    totaldeceased: JSON.stringify(totaldeceased),
                    date: moment(date).format('DD MMMM')
                }
            })

            console.log(ownData);
            setTimeseries(ownData);
            setStatesTimeSeries(stateDailyResponse.data.states_daily);
            setRawData(summaryData);
            setFetched(true);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="cards-container">

            <section className="cards">
                <div className="card fadeInUp" style={{ animationDelay: '0.7s' }}>
                    <TotalConfirmedChart title="Total Cases" timeseries={timeseries} />
                </div>

                <div className="card fadeInUp" style={{ animationDelay: '0.7s' }}>
                    <DailyConfirmedChart title="Daily Cases" timeseries={timeseries} />
                </div>
                <div className="card fadeInUp" style={{ animationDelay: '0.7s' }}>
                    <GenderChart title="Patient Gender" data={rawData} />
                </div>

                <div className="card fadeInUp" style={{ animationDelay: '0.7s' }}>
                    <AgeChart title="Patients by Age" data={rawData} />
                </div>

                {   // <div
                    //     className="card card-big fadeInUp"
                    //     style={{ animationDelay: '0.7s' }}
                    // >
                    //     <AllStatesChart
                    //         title="Total Cases by State"
                    //         data={statesTimeSeries}
                    //     />
                    // </div>

                    // <div className="card fadeInUp" style={{ animationDelay: '0.7s' }}>
                    //     <GrowthTrendChart
                    //         title="States - Growth Trend"
                    //         data={statesTimeSeries}
                    //     />
                    // </div>

                    // <div className="card fadeInUp" style={{ animationDelay: '0.7s' }}>
                    //     <GenderChart title="Patient Gender" data={rawData} />
                    // </div>

                    // <div className="card fadeInUp" style={{ animationDelay: '0.7s' }}>
                    //     <AgeChart title="Patients by Age" data={rawData} />
                    // </div>

                    // <div className="card fadeInUp" style={{ animationDelay: '0.7s' }}>
                    //     <NationalityChart title="Patients by  Nationality" data={rawData} />
                    // </div>
                }
            </section>
        </div>
    );
}

export default Charts;