import React from 'react';
import './Mumbai_collection.css';
import Restaurant_card from '../../../../components/Restaurant_card/Restaurant_card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { Autoplay, Navigation, Pagination, A11y, Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import sampleimg from '../../../../assets/Explore/Header/RC.jpeg';
import useWindowSize from '../../../../components/useWindowSize';
import { useNavigate, useParams } from 'react-router-dom';

const Mumbai_collection = () => {
  const size = useWindowSize();
  const width = size.width;
  const navigate = useNavigate();
  const { city } = useParams();

  //updated click function to dynamically route to restaurants  
  const handleClickGigi = (title) => {
    navigate(`/explore/${city}/${title}`);
  };

  const cardData = [
    {
      title: 'Gigi1, Bandra',
      rating: '4.4',
      location: 'Linking Road, Bandra West, Mumbai',
      cuisines: 'Japanese | European',
      price: '₹4000 for two',
      image: sampleimg,
      fun: handleClickGigi,
    },

    {
      title: 'Gigi2, Bandra',
      rating: '4.4',
      location: 'Linking Road, Bandra West, Mumbai',
      cuisines: 'Japanese | European',
      price: '₹4000 for two',
      image: sampleimg,
      fun: handleClickGigi,
    },

    {
      title: 'Gigi3, Bandra',
      rating: '4.4',
      location: 'Linking Road, Bandra West, Mumbai',
      cuisines: 'Japanese | European',
      price: '₹4000 for two',
      image: sampleimg,
      fun: handleClickGigi,
    },

    {
      title: 'Gigi4, Bandra',
      rating: '4.4',
      location: 'Linking Road, Bandra West, Mumbai',
      cuisines: 'Japanese | European',
      price: '₹4000 for two',
      image: sampleimg,
      fun: handleClickGigi,
    },
    {
      title: 'Gigi5, Bandra',
      rating: '4.4',
      location: 'Linking Road, Bandra West, Mumbai',
      cuisines: 'Japanese | European',
      price: '₹4000 for two',
      image: sampleimg,
      fun: handleClickGigi,
    },
  ];

  return (
    <div className="collection">
      <div className="carasouel">
        <div className='head-city'>
          {city} 
        </div>
        <hr className='carasouel-line'/>
        <div className='headtext'>
          All collections in {city}
        </div>
        {width <= 768 ? (
          <div className="flexbox-container">
            {cardData.map((element, index) => (
              <Restaurant_card
                key={index}
                title={element.title}
                rating={element.rating}
                location={element.location}
                cuisines={element.cuisines}
                price={element.price}
                image={element.image}
                onClick={() => element.fun(element.title)} 
                // passing title as a apramter in fun(funciton)
              />
            ))}
          </div>
        ) : (
          <Swiper
            className='swiper'
            spaceBetween={10}
            direction={'horizontal'}
            slidesPerView={3}
            freeMode={true}
            mousewheel={true}
            style={{
              '--swiper-pagination-color': '#000000',
              'el': '.swiper-pagination',
            }}
            centeredSlides={false}
            modules={[Navigation, Pagination, A11y, Autoplay, Mousewheel, FreeMode]}
            pagination={{ clickable: true }}
            loop={true}
          >
            {cardData.map((element, index) => (
              <SwiperSlide className='slide' key={index}>
                <Restaurant_card
                   title={element.title}
                   rating={element.rating}
                   location={element.location}
                   cuisines={element.cuisines}
                   price={element.price}
                   image={element.image}
                   onClick={() => element.fun(element.title)} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Mumbai_collection;
