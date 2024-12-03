import React from 'react'
import './Restaurant_main.css';
import Ambience from '../Ambience/Ambience';
import Food from '../Food/Food';
const starIcon = process.env.PUBLIC_URL + '/Star.svg';
const Restaurant_main = (props) => {
  return (
    <div className='restaurant_main'>
         <div className="inner">
                {/* Title Section */}
              
                    <div className="text_img">
                        <div className='img'></div>
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
                            <button>Food</button>
                            <button>Ambience</button>
                            <button>Menu</button>
                            <button className='call'>Call us</button>
                            
                        </div>
                        <div className="recommendations">
                            <h4>Get Recommendations</h4>
                            <hr/>
                            <p>Using our chatbot, Zico!</p>
                            <p>Zico is a smart dining assistant that suggests the perfect dishes based on your cravings and Palate Crafted.</p>
                        </div>
                    </div>
                </div>
                <Ambience arr={props.amb_arr}/>
                <Food arr={props.food_arr}/>
            </div>
    </div>
  )
}

export default Restaurant_main
