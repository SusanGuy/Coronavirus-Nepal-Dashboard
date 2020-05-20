import React, { useState, useRef } from 'react';
import { useEffectOnce, useLockBodyScroll, useWindowSize, useLocalStorage } from 'react-use';
import anime from 'animejs';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const Expand = ({ setExpand }) => {
    const expandElement = useRef(null);

    useEffectOnce(() => {
        anime({
            targets: expandElement.current,
            translateX: '10.5rem',
            easing: 'easeOutExpo',
            duration: 250
        });
    });

    const pages = {
        Home: '/home',
        'About Us': '/aboutus',
        Feed: '/feed'
    };

    return (
        <div
            className='expand'
            ref={expandElement}
            onMouseLeave={() => {
                setExpand(false);
            }}
        >
            {Object.keys(pages).map((page, i) => {
                return (
                    <a
                        to={pages[page]}
                        key={i}
                        onClick={() => {
                            setExpand(false);
                        }}
                    >
                        <span>{page}</span>
                    </a>
                );
            })}

            {window.innerWidth < 768 && (
                <div className='fadeInUp' style={{ animationDelay: '0.9s' }} onClick={() => {}}>
                    <div>{<Icon.Sun color={'#ffc107'} />}</div>
                </div>
            )}

            <div className='expand-bottom fadeInUp' style={{ animationDelay: '1s' }}>
                <h5>{'Statistics for Nepali Corona Virus Cases'}</h5>
            </div>
        </div>
    );
};

export default Expand;

// import React from 'react';
// import './NavExpand.scss';
// const NavExpand = () => {
//     return (
//         <div>
//             <div class='expand' style={{ transform: 'translateX(10.5rem)' }}>
//                 <a href='/'>
//                     <span class='fadeInUp focused' style={{ animationDelay: '0.2s' }}>
//                         Home
//                     </span>
//                 </a>
//                 <a href='/demographics'>
//                     <span class='fadeInUp ' style={{ animationDelay: '0.3s' }}>
//                         Demographics
//                     </span>
//                 </a>
//                 <a href='/deepdive'>
//                     <span class='fadeInUp ' style={{ animationDelay: '0.4s' }}>
//                         Deep Dive
//                     </span>
//                 </a>
//                 <a href='/essentials'>
//                     <span class='fadeInUp ' style={{ animationDelay: '0.5s' }}>
//                         Essentials
//                     </span>
//                 </a>
//                 <a href='/about'>
//                     <span class='fadeInUp ' style={{ animationDelay: '0.6s' }}>
//                         About
//                     </span>
//                 </a>
//                 <div class='expand-bottom fadeInUp' style={{ animationDelay: '1s' }}>
//                     <h5>A crowdsourced initiative.</h5>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NavExpand
