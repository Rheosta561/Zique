import React from 'react';
import Iframe from '../../../../../../components/iframe/Iframe';
import sampleimg from '../../../../../../assets/Explore/Header/RC.jpeg';
import './Gigi_main.css';
import Ambience from '../../../../../../components/Ambience/Ambience';
import Food from '../../../../../../components/Food/Food';
const starIcon = process.env.PUBLIC_URL + '/Star.svg';

const arr = [
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg,
    sampleimg
];

const Gigi_main = () => {
    return (
        <div className="gigi_main">
            <div className="inner">
                {/* Title Section */}
              
                    <div className="text_img">
                        <div className='img'></div>
                        <div className='text_restro'>Gigi Worli</div>
                        <div className="restro-rating">
                            <span>4.4</span>
                            <img src={starIcon} alt="Star" className="icon" />
                         </div>
                    </div>
                    <div className="line"></div>
             
                {/* Restaurant Info Section */}
                <div className="restaurant-info">
                    <div className="left">
                        <div className='first'>
                        <p className="cuisine">Japanese & European</p>
                        <p className="address">14th Road, Bandra West, Mumbai </p>
                        <p className="timing">11 AM - 11 PM</p>
                        </div>
                        <div className='second'>
                        <p className="price1">₹4000 for two</p>
                        <p className="phone"> +91-XXXXXXXXXX</p>
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
                <Ambience arr={arr}/>
                <Food arr={arr}/>
            </div>
        </div>
    );
};

export default Gigi_main;
