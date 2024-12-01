import React from 'react';
import Iframe from '../../../../../../components/iframe/Iframe';
import sampleimg from '../../../../../../assets/Explore/Header/image.png';
import './Gigi_main.css';

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
    sampleimg
];

const Gigi_main = () => {
    return (
        <div className="gigi_main">
            <div className="inner">
                {/* Title Section */}
              
                    <div className="text">Gigi, Worli</div>
                    <div className="line"></div>
             
                {/* Restaurant Info Section */}
                <div className="restaurant-info">
                    <div className="left">
                        <p className="cuisine">Japanese & European</p>
                        <p className="address">14th Road, Bandra West, Mumbai </p>
                        <p className="timing">11 AM - 11 PM</p>
                        <p className="price1">₹4000 for two</p>
                        <p className="phone"> +91-XXXXXXXXXX</p>
                    </div>
                    <div className="right">
                        <div className="buttons">
                            <button>Food</button>
                            <button>Ambience</button>
                            <button>Menu</button>
                        </div>
                        <div className="recommendations">
                            <h4>Get Recommendations</h4>
                            <p>Using our chatbot, Zico!</p>
                            <p>Zico is a smart dining assistant that suggests the perfect dishes based on your cravings and Palate Crafted.</p>
                        </div>
                    </div>
                </div>
                {/* Embed the Zapier Bot */}
                <Iframe arr1={arr} arr2={arr} src="https://interfaces.zapier.com/embed/chatbot/cm2jzjgol0006t3attxl1lef9" />
            </div>
        </div>
    );
};

export default Gigi_main;
