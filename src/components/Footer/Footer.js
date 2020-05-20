import React from 'react';
import * as Icon from 'react-feather';
import './footer.scss';
const Footer = () => {
    return (
        <div>
            <footer className='fadeInUp' style={{ animationDelay: '2s' }}>
                <h5>{'We stand with everyone fighting on the frontlines'}</h5>

                <div className='link'>Contributors:</div>

                <a
                    href='https://github.com/sushantbaskota2'
                    className='button github'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon.GitHub />
                    <span>{'Github: Sushant Baskota'}</span>
                </a>
                <a
                    href='https://github.com/SusanGuy'
                    className='button github'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon.GitHub />
                    <span>{'Github: Susan Subedi'}</span>
                </a>

                <a
                    className='button excel'
                    href='http://patientdb.covid19india.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon.Database />
                    <span>{'Crowdsourced Patient Database'}</span>
                </a>

                <a
                    href='https://twitter.com/covid19indiaorg'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='button twitter'
                    style={{ justifyContent: 'center' }}
                >
                    <Icon.Twitter />
                    <span>{'View updates on Twitter'}</span>
                </a>

                <a
                    href='https://bit.ly/covid19crowd'
                    className='button telegram'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon.MessageCircle />
                    <span>{'Join Telegram to Collaborate!'}</span>
                </a>
            </footer>
        </div>
    );
};

export default Footer;
