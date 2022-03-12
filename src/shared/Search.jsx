import React, { useState } from "react";
import SearchService from "../services/Search.service";
import "../styles/Search.css";

const Search = ({searchIn}) => {
    const [ searchTxt, setSearchTxt ] = useState('');
    return (
        <div id="parent" className="__search-div">Search by {searchIn}
            <div>
                <input className="__search-input" type="text" id="search" placeholder="Search..." onChange={event => { setSearchTxt(event.target.value); }}
                    onKeyPress={event => {
                    if (event.key === 'Enter') {
                        SearchService('track', searchTxt)
                    }
                }}
                />
            </div>
        </div>
    )
}

export default Search;