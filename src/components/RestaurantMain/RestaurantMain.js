import React, { useState } from 'react';
import './Restaurant_main.css';
import Ambience from '../Ambience/Ambience';
import Food from '../Food/Food';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu';

const starIcon = process.env.PUBLIC_URL + '/Star.svg';

const RestaurantMain = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = (e) => {
    if (e.target.className === 'popup-overlay') {
      setShowPopup(false);
    }
  };
  const navigate = useNavigate();

  const handleFoodClick = () => {
    window.location.hash = '#FOOD';
  };
  const handleAmbClick = () => {
    window.location.hash = '#AMB';
  };
  const handleMenClick = () => {
    window.location.hash = '#MENU';
  };

  const handleRecommendationsClick = () => {
    navigate(`zico/${props.name}`); 
  };

  return (
    <div className="restaurant_main">
      <div className="inner">
        {/* Title Section */}
        <div className="text_img">
          <div className="img">
            <img src={props.image || '/default-image.jpg'} alt="" className="profilepic" />
          </div>
          <div className="text_restro">{props.name}</div>
          <div className="restro-rating">
            <span>{props.rating}</span>
            <img src={starIcon} alt="Star" className="icon" />
          </div>
        </div>
        <div className="line"></div>

        {/* Restaurant Info Section */}
        <div className="restaurant-info">
          <div className="left">
            <div className="first">
              <p className="cuisine">{props.cuisine}</p>
              <a href={props.location}><p className="address">{props.address}</p></a>
              
              <p className="timing">
                {props.timing.split(';').map((time, index) => (
                  <React.Fragment key={index}>
                    {time.trim()}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="second">
              <p className="price1">{props.price}</p>
              <p className="phone"><a href={`tel:${props.number}`}>+91-{props.number}</a></p>
            </div>
          </div>
          <div className="right">
            <div className="buttons">
              <button onClick={handleFoodClick}>Food</button>
              <button onClick={handleAmbClick}>Ambience</button>
              <button onClick={handleMenClick}>Menu</button>
              <button className="call" onClick={togglePopup}>Call us</button>
            </div>
            <div className="recommendations" onClick={handleRecommendationsClick} style={{ cursor: 'pointer' }}>
              <h4>Get Recommendations</h4>
              <hr />
              <p>Using our chatbot, Zico!</p>
              <p>Zico is a smart dining assistant that suggests the perfect dishes based on your cravings and palate crafted.</p>
            </div>
          </div>
        </div>
        <div id="AMB">
          <Ambience arr={props.amb_arr} />
        </div>
        <div id="FOOD">
          <Food arr={props.food_arr} />
        </div>
        <br />
        <br />
        <div id="MENU">
          <Menu source={props.source} />
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="phone-popup">
            <div className="popup-number-section">
              <p className="popup-number">{props.number}</p>
            </div>
            <div className="popup-button-section">
              <button
                className="popup-call"
                onClick={() => (window.location.href = `tel:${props.number}`)}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMain;
