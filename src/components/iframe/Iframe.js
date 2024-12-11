import React, { useEffect, useState } from 'react';
import './Iframe.css'
import Navbar from '../navbar/Navbar';
import PhotoGrid from '../PhotoGird/PhotoGrid';
import { useParams } from 'react-router-dom';
import Floading from './Floading';
const Iframe = () => {
  const { restaurant } = useParams(); 
  const [restaurantData, setRestaurantData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
      const fetchRestaurantData = async () => {
          try {
              const response = await fetch(`https://zique-backend-restaurant.onrender.com/api/${restaurant}`);
              
              if (!response.ok) {
                  throw new Error("Restaurant not found");
              }
              const data = await response.json();
              setRestaurantData(data); 
              setIsLoading(false);
          } catch (error) {
              console.error("Error fetching restaurant:", error.message);
              setIsLoading(false); 
          }
      };

      fetchRestaurantData(); 
  }, [restaurant]);

  if (isLoading) {
      return <Floading/>; 
  }
  if (!restaurantData) {
      return <div>Restaurant not found</div>;
  }
  return (
    <div className='frame'>
      <iframe
        src={restaurantData.chatbot}
        allow="clipboard-write *"
        // style={{ border: 'none'  }}
        title="Chatbot"
        className='framebot'
      ></iframe>
      <div>
      </div>
      {/* <div className='Ambience'>
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
      </div> */}
    </div>
  );
};

export default Iframe;
