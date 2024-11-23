import React from 'react';
import './Iframe.css'
import Navbar from '../navbar/Navbar';
import PhotoGrid from '../PhotoGird/PhotoGrid';
const Iframe = (props) => {
  return (
    <div className='frame'>
      <iframe
        src={props.src} 
        allow="clipboard-write *"
        style={{ border: 'none' }}
        title="Chatbot"
      ></iframe>
      <div className='Ambience'>
        <div className='Ambience-text'> Ambience</div>
        <div className='Ambience-Grid'>
          <PhotoGrid arr = {props.arr1}/>
        </div>
      </div>
      <div className='Food'>
        <div className='Food-text'> Food</div>
        <div className='Food-Grid'>
          <PhotoGrid arr = {props.arr2}/>
        </div>
      </div>
    </div>
  );
};

export default Iframe;
