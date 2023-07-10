import React from 'react'
import "./Details.scss"
import { FaBeer } from 'react-icons/fa';

function Details() {
  return (
    <div className='container'>
        <div className='navbar'>
            <h2>Student details</h2>
            <input type="text" placeholder='search name'/>
            </div>
            <div className='right'>
            <FaBeer />
            </div>

    </div>
  )
}

export default Details