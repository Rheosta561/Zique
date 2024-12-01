import React from 'react';
import './Restaurant_card.css';

const starIcon = process.env.PUBLIC_URL + '/Star.svg';



const Restaurant_card = ({ title, rating, location, cuisines, price, image, onClick }) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      {/* Image Section */}
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="card-overlay">
          <div className="card-header">
            <h1 className="card-title">{title}</h1>
            <div className="card-rating">
              <span>{rating}</span>
              <img src={starIcon} alt="Star" className="star-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="card-desc">
        <div className="card-details">
          <div className="cuisines">{cuisines}</div>
          <div className="price">{price}</div>
        </div>
        <div className="location">{location}</div>
      </div>
    </div>
  );
};

export default Restaurant_card;
