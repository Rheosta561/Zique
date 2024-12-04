import React from 'react'
import './Lyla_main.css'
import Restaurant_main from '../../../../../../components/Restaurant_main/Restaurant_main'
import sampleimg from '../../../../../../assets/Explore/Header/RC.jpeg'
import { useParams } from 'react-router-dom';
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

const Lyla_main = () => {
  const {restaurant} = useParams();
  return (

    <div className='lyla_main'>
      <Restaurant_main
      name = {restaurant}
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

export default Lyla_main
