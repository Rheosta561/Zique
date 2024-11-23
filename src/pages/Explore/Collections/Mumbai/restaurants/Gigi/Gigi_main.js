import React from 'react'
import Iframe from '../../../../../../components/iframe/Iframe'
import sampleimg from'../../../../../../assets/Explore/Header/image.png'
import './Gigi_main.css'
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
]
const Gigi_main = () => {
  return (
    <div className='gigi_main'>
      <div className='inner'>
      <div className='text'> Gigi, Worli</div>
      <Iframe arr1={arr} arr2={arr} src='https://interfaces.zapier.com/embed/chatbot/cm2jzjgol0006t3attxl1lef9'/>
      </div>
    </div>
  )
}

export default Gigi_main
