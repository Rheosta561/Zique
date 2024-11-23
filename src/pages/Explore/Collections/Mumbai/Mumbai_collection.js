import React from 'react';
import './Mumbai_collection.css';
import Restaurant_card from '../../../../components/Restaurant_card/Restaurant_card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import useWindowSize from '../../../../components/useWindowSize';
import sampleimg from '../../../../assets/Explore/Header/image.png';
import { useNavigate } from 'react-router-dom';

const Mumbai_collection = () => {
  const size = useWindowSize();
  const width = size.width;
  const navigate = useNavigate();

  // Move handleClickGigi inside the component
  const handleClickGigi = () => {
    navigate('/gigi');
  };

  // Array of card data with click handlers
  const cardData = [
    {
      title: 'Restaurant 1',
      desc: 'A description of Restaurant 1',
      image: sampleimg,
      fun: handleClickGigi
    },
    {
      title: 'Restaurant 2',
      desc: 'A description of Restaurant 2',
      image: sampleimg,
      fun: handleClickGigi
    },
    {
      title: 'Restaurant 3',
      desc: 'A description of Restaurant 3',
      image: sampleimg,
      fun: handleClickGigi
    },
    {
      title: 'Restaurant 4',
      desc: 'A description of Restaurant 4',
      image: sampleimg,
      fun: handleClickGigi
    },
    {
      title: 'Restaurant 5',
      desc: 'A description of Restaurant 5',
      image: sampleimg,
      fun: handleClickGigi
    },
  ];

  return (
    <div className="collection">
      <div className="carasouel">
        <div className='headtext'>
          All collections in Mumbai
        </div>
        {width <= 768 ? (
          <div className="flexbox-container">
            {cardData.map((element, index) => (
              <Restaurant_card
                key={index}
                title={element.title}
                desc={element.desc}
                image={element.image}
                onClick={element.fun} // Use the individual click handler
              />
            ))}
          </div>
        ) : (
          <Swiper
            className='swiper'
            spaceBetween={100}
            slidesPerView={2}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            style={{
              '--swiper-pagination-color': '#B71048',
            }}
            centeredSlides={true}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
          >
            {cardData.map((element, index) => (
              <SwiperSlide key={index}>
                <Restaurant_card
                  title={element.title}
                  desc={element.desc}
                  image={element.image}
                  onClick={element.fun} // Use the individual click handler
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
