import React from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';

const Explore = () => {
  const cities = ['Mumbai'];

  return (
    <div className='explore' id="explore">
      <h1>Explore</h1>
      <h2>Discover Our Best Restaurant Picks</h2>
      <div className='cities'>
        {cities.map((city, index) => (
          <Link key={index} to={`explore/${city}`}>
            <div className='mimage'>              
              <span className='city-text'>
                {city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;