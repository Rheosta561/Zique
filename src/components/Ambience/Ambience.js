import React from 'react'
import PhotoGrid from '../PhotoGird/PhotoGrid'
import './Ambience.css'
const Ambience = (props) => {
  return (
    <div className='ambience' id='AMB'>
        <div className='ambience_header'>
            <div className='amb_text'>Ambience</div>
            <div className='amb-buttons'>
                <button>Food</button>
                <button>Ambience</button>
                <button>Menu</button>
            </div>
        </div>
        <hr className='amb-line'/>
        <PhotoGrid arr={props.arr}/>
    </div>
  )
}

export default Ambience
