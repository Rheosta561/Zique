import React from 'react'
import sampleimg from '../../../../../../assets/Explore/Header/RC.jpeg';
import './Shy_main.css';
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
const Shy_main = () => {
  return (
    <div className="shy_main">
      <Restaurant_main
            name = "Shy, Worli"
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
  )
}

export default Shy_main
