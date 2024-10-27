import React from 'react';
import './Iframe.css'
const Iframe = () => {
  return (
    <div className='frame'>
      <iframe
        src='https://interfaces.zapier.com/embed/chatbot/cm2jzjgol0006t3attxl1lef9' 
        allow="clipboard-write *"
        style={{ border: 'none' }}
        title="Chatbot"
      ></iframe>
    </div>
  );
};

export default Iframe;
