import React from 'react';
import sampleimg from '../../../../../../assets/Explore/Header/RC.jpeg';
import './Gigi_main.css';
import Restaurant_main from '../../../../../../components/Restaurant_main/Restaurant_main';

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
            <Restaurant_main
            name = "Gigi, Worli"
            rating = "4.4"
            cuisine = "Japanese & European"
            address = "some address"
            timming = "timing"
            price = "price"
            number = "phone number"
            amb_arr= {arr}
            food_arr= {arr}

            />
        </div>
    );
};

export default Gigi_main;
