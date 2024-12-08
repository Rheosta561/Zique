import React, { useState, useEffect } from 'react';
import sampleimg from '../../../../../../assets/Explore/Header/RC.jpeg';
import './Gigi_main.css';
import RestaurantMain from '../../../../../../components/RestaurantMain/RestaurantMain';
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

const Gigi_main = () => {
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
        return <div>Loading...</div>;
    }
    if (!restaurantData) {
        return <div>Restaurant not found</div>;
    }

    return (
        <div className="gigi_main">
            <RestaurantMain
                name={restaurantData.name}
                rating={restaurantData.ratings || "Not available"}
                cuisine={restaurantData.cuisine || "Not available"}
                address={restaurantData.address || "Not available"}
                timming={restaurantData.dateTime || "8:00-23:00"}  
                price={restaurantData.price || "Not available"}
                number={restaurantData.phone || "Not available"}
                amb_arr={restaurantData.ambience.length > 0 ? restaurantData.ambience : arr}  // Fallback if ambience array is empty
                food_arr={restaurantData.food.length > 0 ? restaurantData.food : arr}  // Fallback if food array is empty
                source={restaurantData.menu}
            />
        </div>
    );
};

export default Gigi_main;
