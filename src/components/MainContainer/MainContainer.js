import React from 'react';
import './MainContainer.css';
import Nav from '../Navbar/Nav';
import Cases from '../Cases/Cases';
import MainChart from '../MainChart/MainChart';
const MainContainer = () => {
    return (
        <div className='container'>
            <div className='row'>
                <Nav />
                <Cases />
                <MainChart />
            </div>
        </div>
    );
};

export default MainContainer;
