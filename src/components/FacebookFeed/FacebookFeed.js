import React from 'react';
import { FacebookProvider, EmbeddedPost, Page } from 'react-facebook';

const FacebookFeed = ({ link }) => {
    return (
        <div>
            <FacebookProvider appId='1659583547508616'>
                <Page href={`https://www.facebook.com/${link}`} tabs='timeline' />
            </FacebookProvider>
        </div>
    );
};

export default FacebookFeed;
