import React from 'react';
import './Restaurant_main.css';
import Ambience from '../Ambience/Ambience';
import Food from '../Food/Food';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu';

const starIcon = process.env.PUBLIC_URL + '/Star.svg';

const RestaurantMain = (props) => {
  const navigate = useNavigate();

  const handleClick = (section) => {
    // Use navigate for scrolling
    navigate(`#${section}`);
  };

  return (
    <div className='restaurant_main'>
      <div className="inner">
        {/* Title Section */}
        <div className="text_img">
          <div className='img'>
            <img src={props.image || '/default-image.jpg'} alt="Restaurant" />
          </div>
          <div className='text_restro'>{props.name}</div>
          <div className="restro-rating">
            <span>{props.rating}</span>
            <img src={starIcon} alt="Star" className="icon" />
          </div>
        </div>
        <div className="line"></div>

        {/* Restaurant Info Section */}
        <div className="restaurant-info">
          <div className="left">
            <div className='first'>
              <p className="cuisine">{props.cuisine}</p>
              <p className="address">{props.address}</p>
              <p className="timing">{props.timming}</p>
            </div>
            <div className='second'>
              <p className="price1">{props.price}</p>
              <p className="phone">{props.number}</p>
            </div>
          </div>
          <div className="right">
            <div className="buttons">
              <button onClick={() => handleClick("food")}>Food</button>
              <button onClick={() => handleClick("ambience")}>Ambience</button>
              <button onClick={() => handleClick("menu")}>Menu</button>
              <button className='call'>Call us</button>
            </div>
            <div className="recommendations">
              <h4>Get Recommendations</h4>
              <hr />
              <p>Using our chatbot, Zico!</p>
              <p>Zico is a smart dining assistant that suggests the perfect dishes based on your cravings and palate crafted.</p>
            </div>
          </div>
        </div>
        
        {/* Section Content */}
        <div id="AMB">
          <Ambience arr={props.amb_arr} />
        </div>
        <div id='FOOD'>
          <Food arr={props.food_arr} />
        </div>
        <br />
        <br />
        <div id="MENU">
          <Menu source = {props.source}/>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMain;
