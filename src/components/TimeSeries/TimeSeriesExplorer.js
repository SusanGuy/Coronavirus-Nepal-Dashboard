import TimeSeries from './TimeSeries';

import equal from 'fast-deep-equal';
import React from 'react';
import * as Icon from 'react-feather';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from 'react-use';

const isEqual = (prevProps, currProps) => {
    if (!currProps.isIntersecting) return true;
    if (!prevProps.isIntersecting) return false;
    // if (!equal(currProps.activeStateCode, prevProps.activeStateCode)) {
    //     return false;
    // }

    return true;
};

function TimeSeriesExplorer({
    timeseries,
    activeState,
    states,
    setActiveState
}) {
    const [chartType, setChartType] = useLocalStorage('timeseriesChartType', 1);

    const [timeseriesMode, setTimeseriesMode] = useLocalStorage(
        'timeseriesMode',
        true
    );
    const [timeseriesLogMode, setTimeseriesLogMode] = useLocalStorage(
        'timeseriesLogMode',
        false
    );
    const { t } = useTranslation();

    return (
        <div
            className={`TimeSeriesExplorer `}
        >
            <div
                className="timeseries-header fadeInUp"
                style={{ animationDelay: '2.5s' }}
            >

                <h1>{t('Spread Trends')}</h1>
                <div className="tabs">
                    <div
                        className={`tab ${chartType === 1 ? 'focused' : ''}`}
                        onClick={() => {
                            setChartType(1);
                        }}
                    >
                        <h4>{t('Cumulative')}</h4>
                    </div>
                    <div
                        className={`tab ${chartType === 2 ? 'focused' : ''}`}
                        onClick={() => {
                            setChartType(2);
                        }}
                    >
                        <h4>{t('Daily')}</h4>
                    </div>
                </div>

                <div className="scale-modes">
                    <label className="main">{t('Scale Modes')}</label>
                    <div className="timeseries-mode">
                        <label htmlFor="timeseries-mode">{t('Uniform')}</label>
                        <input
                            id="timeseries-mode"
                            type="checkbox"
                            checked={timeseriesMode}
                            className="switch"
                            aria-label={t('Checked by default to scale uniformly.')}
                            onChange={(event) => {
                                setTimeseriesMode(!timeseriesMode);
                            }}
                        />
                    </div>
                    <div
                        className={`timeseries-logmode ${
                            chartType !== 1 ? 'disabled' : ''
                            }`}
                    >
                        <label htmlFor="timeseries-logmode">{t('Logarithmic')}</label>
                        <input
                            id="timeseries-logmode"
                            type="checkbox"
                            checked={chartType === 1 && timeseriesLogMode}
                            className="switch"
                            disabled={chartType !== 1}
                            onChange={(event) => {
                                setTimeseriesLogMode(!timeseriesLogMode);
                            }}
                        />
                    </div>
                </div>

                {states && (
                    <div className="trends-state-name">
                        <select
                            value={activeState}
                            onChange={({ target }) => {
                                console.log(JSON.stringify(target.value));
                                setActiveState(JSON.stringify(target.value))
                                console.log(activeState);
                            }}
                        >
                            {states.map((s) => {
                                console.log(s.statecode);

                                return (
                                    <option
                                        value={s.statecode}
                                        key={s.statecode}
                                        statedata={JSON.stringify(s)}
                                    >
                                        {s.statecode === 'TT' ? t('All States') : t(s.state)}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                )}
            </div>

            {
                timeseries && (
                    <TimeSeries
                        timeseriesProp={timeseries}
                        chartType={chartType}
                        mode={timeseriesMode}
                        logMode={timeseriesLogMode}
                        isTotal={activeState === 'TT'}
                    />
                )
            }
        </div >
    );
}

export default React.memo(TimeSeriesExplorer, isEqual);