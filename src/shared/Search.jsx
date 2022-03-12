import React from "react";


const Search = ({searchIn}) => (
    <div id="parent" >Search by {searchIn}
        <div>
           <input type="text" id="search" placeholder="Search..." />
        </div>
    </div>
    
)

export default Search;