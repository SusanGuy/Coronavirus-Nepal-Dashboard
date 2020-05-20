import React from 'react';
import './aboutus.scss';
const aboutus = () => {
    return (
        <div>
            <div className='about-header'>
                <h1>About Us</h1>
                <h3>
                    We created this dashboard for ease of access to important data during these hard times. We hope to
                    spread awareness through our small effort.
                </h3>
            </div>
            <div className='Home'>
                <div className='home-left'>
                    <figure class='snip1336'>
                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg' alt='sample87' />
                        <figcaption>
                            <img
                                src='https://avatars3.githubusercontent.com/u/49043517?s=460&u=7c4af2704ee5e490cf8725961f46401afdc98c4e&v=4'
                                alt='profile-sample4'
                                class='profile'
                            />
                            <h2>
                                Sushant Baskota<span>Developer</span>
                            </h2>
                            <a href='#' class='follow'>
                                Follow
                            </a>
                            <a href='#' class='info'>
                                More Info
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div className='home-right'>
                    <figure class='snip1336 hover'>
                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg' alt='sample74' />
                        <figcaption>
                            <img
                                src='https://avatars0.githubusercontent.com/u/31829258?s=460&u=c0e094fb4cbc0ee4a64e731fbf26108c982e1304&v=4'
                                alt='profile-sample2'
                                class='profile'
                            />
                            <h2>
                                Susan Subedi<span>Developer</span>
                            </h2>

                            <a href='#' class='follow'>
                                Follow
                            </a>
                            <a href='#' class='info'>
                                More Info
                            </a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default aboutus;
