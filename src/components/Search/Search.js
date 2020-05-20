import React, { useState } from 'react';
import * as Icon from 'react-feather';
const Search = () => {
    const [ searchValue, setSearchValue ] = useState('');
    return (
        <div>
            <div className='Search'>
                <div className='line' />

                <div className='search-input-wrapper'>
                    <input
                        type='text'
                        value={searchValue}
                        onChange={(event) => {
                            setSearchValue(event.target.value);
                        }}
                    />
                    <span id='search-placeholder' className='search-placeholder' />

                    <div className={`search-button`}>
                        <Icon.Search />
                    </div>

                    {searchValue.length > 0 && (
                        <div
                            className={`close-button`}
                            onClick={() => {
                                setSearchValue('');
                            }}
                        >
                            <Icon.X />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
