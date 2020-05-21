import React from 'react';

const Province = ({ province, val }) => {
    return (
        <path
            className={`state-boundary ${province}`}
            stroke-miterlimit='3.8637'
            d={val}
            id='path4045'
            clip-rule='evenodd'
            stroke-linejoin='round'
            stroke-width='1.9843'
            stroke='#646464'
            fill-rule='evenodd'
            fill='none'
        />
    );
};

export default Province;
