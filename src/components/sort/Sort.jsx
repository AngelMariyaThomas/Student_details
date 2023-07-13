import React from 'react'
import './Sort.scss'

function Sort({sortOrder,handleSortOrder}) {
  return (
    <div className='sort'>
        <select value={sortOrder} onChange={handleSortOrder}>
          <option value="asc">DOB IN Ascending</option>
          <option value="desc">DOB IN Descending</option>
        </select> 
        </div>
  )
}

export default Sort