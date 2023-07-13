import React from 'react'
import './Search.scss'

const Search=({searchTerm,handleSearch})=> {
    
  return (
   
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
  )
}

export default Search