import React, { useState } from 'react'

const SearchBar = ({filtro}) => {
    
    const [ search, setSearch ] = useState("");
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
        filtro(e.target.value);
    }
// 
    return (
        <div className="input-group input-group-lg m-4">
            <input value={search} onChange={handleSearch} type="text" className="form-control" aria-label="Search" placeholder='Enter Country' aria-describedby="inputGroup-sizing-lg"/>
        </div>
    )
}

export default SearchBar