import React from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';

const Explore = () => {
  const cities = ['mumbai',];

  return (
    <div className='explore' id="explore">
      <h1>Explore</h1>
      <h2>Discover Our Best Restaurant Picks</h2>
      <div className='cities'>
        {/* conditionally mapping the cities present  */}
        {cities.map((city, index) => (
          <Link key={index} to={`explore/${city}`}>
            <div className='mimage'>
              {/* changing the class name mumbai-text to city-text */}
              <span className='city-text'>{city.toUpperCase()}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;
