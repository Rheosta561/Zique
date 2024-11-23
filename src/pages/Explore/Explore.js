import React from 'react'
import './Explore.css';
import { Link } from 'react-router-dom';
const Explore = () => {
  return (
    <div className='explore' id="explore">
        <h1>Explore</h1>
        <h2>Discover Our Best Restaurant Picks</h2>
        <div className='cities'>
            <div className='mimage'></div>
            <Link to = 'mumbai-collection'><h3 className='underlink'>All Collections in Mumbai</h3>
            </Link>
        </div>
      
    </div>
  )
}

export default Explore
