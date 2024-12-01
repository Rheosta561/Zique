import React from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className='explore' id="explore">
        <h1>Explore</h1>
        <h2>Discover Our Best Restaurant Picks</h2>
        <div className='cities'>
            <Link to='mumbai-collection'>
              <div className='mimage'>
                <span className='mumbai-text'>MUMBAI</span>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Explore;
