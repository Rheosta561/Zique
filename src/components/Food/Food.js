import React from 'react'
import PhotoGrid from '../PhotoGird/PhotoGrid'
import './Food.css'


const Food = (props) => {
    const handleFoodClick =() =>{
        window.location.hash = '#FOOD'
    }
    const handleAmbClick =() =>{
        window.location.hash = '#AMB'
    }
    return (
        <div className='food' id="FOOD">
            <div className='food_header'>
                <div className='food_text'>Food</div>
                {/* <div className='food-buttons'>
                    <button onClick={handleFoodClick}>Food</button>
                    <button onClick={handleAmbClick}>Ambience</button>
                    <button>Menu</button>
                </div> */}
            </div>
            <hr className='food-line'/>
            <PhotoGrid arr={props.arr}/>
        </div>
      )
}

export default Food
