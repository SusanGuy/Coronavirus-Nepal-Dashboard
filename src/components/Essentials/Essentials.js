import React from 'react';
import { ExternalLink, Phone } from 'react-feather';
import './Essentials.scss';
const Essentials = () => {
    return (
        <div className='Essentials'>
            <div className='Search'>
                <div className='results fadeInUp' style={{ animationDelay: '0.5s' }}>
                    <div className='essential-result'>
                        <div className='result-top'>
                            <div className='result-top-left'>
                                <div className='result-name'>{'result.properties.name'}</div>
                                <div className='result-location'>{'result.properties.addr'}</div>

                                <div className='result-distance'>{' km away'}</div>
                            </div>
                            <a className='result-category' href={''} target='_noblank'>
                                <span />
                                <ExternalLink />
                            </a>
                        </div>
                        <div className='result-description'>Desc</div>

                        <a className='result-contact' href={`tel:${''}`}>
                            <Phone />
                            <div>{''}</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Essentials;
