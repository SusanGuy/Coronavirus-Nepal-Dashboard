import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import './NavNew.scss';
import NavExpand from '../NavExpand/NavExpand';
import { useEffectOnce, useLockBodyScroll, useWindowSize, useLocalStorage } from 'react-use';
import Footer from '../Footer/Footer';
const NavNew = ({ mode, setMode }) => {
    const [ expand, setExpand ] = useState(false);
    const windowSize = useWindowSize();
    return (
        <div className='Navbar'>
            <div className='LanguageSwitcher'>
                <img
                    alt='logo'
                    src='https://images.squarespace-cdn.com/content/v1/5c4085e585ede1f50f94a4b9/1581018457505-JM3FO6WMFN9BGP3IOE8D/ke17ZwdGBToddI8pDm48kL5hQm_JZO5i_9Equza1B-57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URbcWFoTofQNHE0Fe4ADwtkYw2N2aveJw6FaFCcRrQmU3WUfc_ZsVm9Mi1E6FasEnQ/2019-nCoV-CDC-23312_without_background.png'
                    className='button'
                />
            </div>
            {window.innerWidth > 769 && (
                <div
                    className='navbar-left'
                    onClick={() => {
                        setMode(!mode);
                    }}
                >
                    {mode ? <Icon.Sun color={'#ffc107'} /> : <Icon.Moon />}
                </div>
            )}
            <div className='navbar-middle'>
                <a
                    to='/'
                    onClick={() => {
                        setExpand(false);
                    }}
                >
                    Covid19<span>Nepal</span>
                </a>
            </div>

            <div
                className='navbar-right'
                onClick={() => {
                    setExpand(!expand);
                }}
                onMouseEnter={() => {
                    if (window.innerWidth > 769) {
                        setExpand(true);
                    }
                }}
            >
                {windowSize.width < 769 && <span>{expand ? <Icon.Minimize /> : <Icon.Menu />}</span>}
                {windowSize.width > 769 && (
                    <React.Fragment>
                        <span>
                            <a to='/'>
                                <Icon.Home />
                            </a>
                        </span>
                        <span>
                            <a to='/demographics'>
                                <Icon.Users />
                            </a>
                        </span>
                        <span>
                            <a to='/deepdive'>
                                <Icon.BarChart2 />
                            </a>
                        </span>
                    </React.Fragment>
                )}
            </div>

            {expand && <NavExpand setExpand={setExpand} />}
        </div>
    );
};
export default NavNew;

/**const NavNew = () => {
    const [ hovered, sethovered ] = useState(false);
    return (
        <div className='App'>
            <div class='Navbar' onMouseDown={() => {}}>
                <div class='LanguageSwitcher'>
                    <details class='SelectMenu__StyledSelectMenu-sc-12xd8o8-0 eecTuT'>
                        <summary class='ButtonBase-exshql-0 Button-sc-1cuu878-0 eZDAkm button'>English</summary>
                        <div class='SelectMenuModal__ModalWrapper-fv9zw3-1 efjSzr select-menu-modal' role='menu'>
                            <div class='SelectMenuModal__Modal-fv9zw3-0 iXodqg'>
                                <div class='SelectMenuList-uflcju-0 lcQreK select-menu-list'>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>English
                                    </a>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>हिंदी
                                    </a>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>বাংলা
                                    </a>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>ગુજરાતી
                                    </a>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>ಕನ್ನಡ
                                    </a>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>മലയാളം
                                    </a>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>मराठी
                                    </a>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>ଓଡିଆ
                                    </a>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>ਪੰਜਾਬੀ
                                    </a>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>தமிழ்
                                    </a>
                                    <a
                                        class='SelectMenuItem__StyledItem-sc-13zu9d-0 bxlTmh select-menu-item'
                                        aria-checked='false'
                                        role='menuitemcheckbox'
                                    >
                                        <svg
                                            aria-hidden='true'
                                            class='StyledOcticon-sc-7ly0uy-0 jFKSIm SelectMenu-icon SelectMenu-selected-icon'
                                            height='16'
                                            role='img'
                                            viewBox='0 0 12 16'
                                            width='12'
                                            style={{
                                                display: 'inline-block',
                                                fill: ' currentColor',
                                                userSelect: 'none',
                                                verticalAlign: 'text-bottom'
                                            }}
                                        >
                                            <path fill-rule='evenodd' d='M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z' />
                                        </svg>తెలుగు
                                    </a>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
                <div class='navbar-left'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                    >
                        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
                    </svg>
                </div>
                <div class='navbar-middle'>
                    <a href='/'>
                        Covid19<span>India</span>
                    </a>
                </div>
                <div class='navbar-right'>
                    <span>
                        <a href='/'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                style={{ stroke: 'rgb(76, 117, 242)' }}
                            >
                                <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                                <polyline points='9 22 9 12 15 12 15 22' />
                            </svg>
                        </a>
                    </span>
                    <span>
                        <a href='/demographics'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            >
                                <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
                                <circle cx='9' cy='7' r='4' />
                                <path d='M23 21v-2a4 4 0 0 0-3-3.87' />
                                <path d='M16 3.13a4 4 0 0 1 0 7.75' />
                            </svg>
                        </a>
                    </span>
                    <span>
                        <a href='/deepdive'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            >
                                <line x1='18' y1='20' x2='18' y2='10' />
                                <line x1='12' y1='20' x2='12' y2='4' />
                                <line x1='6' y1='20' x2='6' y2='14' />
                            </svg>
                        </a>
                    </span>
                    <span>
                        <a href='/essentials'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            >
                                <line x1='16.5' y1='9.4' x2='7.5' y2='4.21' />
                                <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
                                <polyline points='3.27 6.96 12 12.01 20.73 6.96' />
                                <line x1='12' y1='22.08' x2='12' y2='12' />
                            </svg>
                        </a>
                    </span>
                    <span>
                        <a href='/about'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            >
                                <circle cx='12' cy='12' r='10' />
                                <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
                                <line x1='12' y1='17' x2='12.01' y2='17' />
                            </svg>
                        </a>
                    </span>
                </div>
                <NavExpand setExpand={sethovered} />
            </div>
        </div>
    );
};

export default NavNew;

**/
