import React from 'react';
import '../Css/search.css';

export default function Search({ handleSeachInputField, bitcoinName }) {
    return (
        <div>
            <div className="search-main">
                <input
                    type="text"
                    className="search-input-field"
                    placeholder="Search Bitcoin"
                    onChange={handleSeachInputField}
                    value={bitcoinName}
                />

            </div>
        </div>
    )
}