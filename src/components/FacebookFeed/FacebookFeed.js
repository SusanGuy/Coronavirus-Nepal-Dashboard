import React from 'react';
import { FacebookProvider, EmbeddedPost, Page } from 'react-facebook';

const FacebookFeed = () => {
    return (
        <div>
            <FacebookProvider appId='1659583547508616'>
                <Page href='https://www.facebook.com/mohpnep/' tabs='timeline' />
            </FacebookProvider>
        </div>
    );
};

export default FacebookFeed;
