import React, { useState, useEffect } from 'react';
import './MainChart.css';
import Chart from '../Chart/Charts';

const MainChart = () => {
    useEffect(() => {
        const data = localStorage.getItem('saved');
        if (data) {
            setFavorites(JSON.parse(localStorage.getItem('saved')));
        }
    }, []);
    const [ favorites, setFavorites ] = useState([]);
    return (
        <div className='main-body column'>
            <div className='row-m0'>
                {favorites.length !== 0 && <Chart setFavorites={setFavorites} favorites={favorites} />}
                <Chart setFavorites={setFavorites} district />
                <Chart setFavorites={setFavorites} province />
            </div>
        </div>
    );
};

export default MainChart;
