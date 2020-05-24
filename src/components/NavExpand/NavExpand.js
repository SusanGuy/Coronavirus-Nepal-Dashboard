import React, { useRef } from 'react';
import { useEffectOnce } from 'react-use';
import anime from 'animejs';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const Expand = ({ setExpand, mode, setMode }) => {
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
        Home: '/',
        'About Us': '/about-us',
        Feed: '/feed',
        Hospitals: '/hospitals'
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
                    <Link
                        to={pages[page]}
                        key={i}
                        onClick={() => {
                            setExpand(false);
                        }}
                    >
                        <span>{page}</span>
                    </Link>
                );
            })}

            {window.innerWidth < 768 && (
                <div className='fadeInUp' style={{ animationDelay: '0.9s' }} onClick={() => {}}>
                    <div
                        className='navbar-left'
                        onClick={() => {
                            if (localStorage.getItem('mode')) {
                                const localMode = JSON.parse(localStorage.getItem('mode'));
                                localStorage.setItem('mode', !localMode);
                            } else {
                                localStorage.setItem('mode', true);
                            }
                            setMode(!mode);
                        }}
                    >
                        {mode ? <Icon.Sun color={'#ffc107'} /> : <Icon.Moon />}
                    </div>
                </div>
            )}

            <div className='expand-bottom fadeInUp' style={{ animationDelay: '1s' }}>
                <h5>{'Statistics for Nepali Corona Virus Cases'}</h5>
            </div>
        </div>
    );
};

export default Expand;
