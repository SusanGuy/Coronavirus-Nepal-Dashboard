import React from "react";
import FacebookFeed from "../../components/FacebookFeed/FacebookFeed";

const Feed = () => {

    return (
        <div className={'Home'} style={{ textAlign: 'center' }}>
            <div className='about-header' style={{ marginTop: '10px' }}>
                <h1>Feed</h1>
            </div>
            <div className='home-left' style={{ paddingTop: '50px' }}>
                <FacebookFeed link='mohpnep' />
            </div>

            <div className='home-right' style={{ paddingTop: '50px' }}>
                <FacebookFeed link='officialroutineofnepalbanda' />
            </div>
        </div>
    );

};

export default Feed;
