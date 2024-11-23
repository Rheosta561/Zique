import React from 'react'
import './Restaurant_card.css'
import { useNavigate } from "react-router-dom";

const Restaurant_card = (props) => {
    const navigate = useNavigate(); 

    return (
      <div className='card' onClick={props.onClick}>
        <div className="card-image"
          style={{
            backgroundImage: `url(${props.image})`
          }}
        >
          <h1> {props.title}</h1>
        </div>

        <div className='card-desc'>
          <h2>{props.desc}</h2>
        </div>
      </div>        
    );
}

export default Restaurant_card
