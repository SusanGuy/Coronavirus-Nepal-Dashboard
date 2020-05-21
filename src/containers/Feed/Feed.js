import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const Feed = () => {
    return (
        <div className={'Home'} style={{ textAlign: 'center' }}>
            <div className='about-header' style={{ marginTop: '10px' }}>
                <h1>Feed</h1>
            </div>
            <div className='home-left' style={{ paddingTop: '50px' }}>
                <TwitterTimelineEmbed
                    sourceType='timeline'
                    url={'https://twitter.com/RONBupdates'}
                    theme='dark'
                    options={{ height: 600, width: 400 }}
                />
            </div>

            <div className='home-right' style={{ paddingTop: '50px' }}>
                <TwitterTimelineEmbed
                    sourceType='timeline'
                    url={'https://twitter.com/mohpnep'}
                    theme='dark'
                    options={{ height: 600, width: 400 }}
                />
            </div>
        </div>
    );
};

export default Feed;
