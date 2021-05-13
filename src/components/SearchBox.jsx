import React from 'react'
import arrow from '../images/icon-arrow.svg';
function Searchbox() {
    return (
        <div className="searchbox p-small">
            <h3 className="heading-primary text-center">IP Address Tracker</h3>
            <div className="searchbox__searchbar">
                <input placeholder="Search for any IP Address or Domain" type="text" className="searchbox__searchbar-text" />
                <button className="searchbox__searchbar-btn">
                    <img src={arrow} alt="Arrow" />
                </button>
            </div>
        </div>
    )
}

export default Searchbox
