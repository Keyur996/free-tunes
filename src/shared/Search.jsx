import React, { useState } from "react";
import SearchService from "../services/Search.service"



const Search = ({searchIn}) => {
    const [ searchTxt, setSearchTxt ] = useState('');
    return (
        <div id="parent" >Search by {searchIn}
            <div>
            <input type="text" id="search" placeholder="Search..." onChange={event => { setSearchTxt(event.target.value); }}
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