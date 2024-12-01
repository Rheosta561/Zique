import React, { useEffect, useState } from 'react';
import './Mumbai_collection.css';
import Restaurant_card from '../../../../components/Restaurant_card/Restaurant_card';
import sampleimg from '../../../../assets/Explore/Header/RC.jpeg';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../../../components/useWindowSize';

const Mumbai_collection = () => {
  const size = useWindowSize();
  const width = size.width;
  const navigate = useNavigate();

  const handleClickGigi = () => {
    navigate('/gigi');
  };

  const cardData = [
    {
      title: 'Gigi, Bandra',
      rating: '4.4',
      location: 'Linking Road, Bandra West, Mumbai',
      cuisines: 'Japanese | European',
      price: '₹4000 for two',
      image: sampleimg,
      fun: handleClickGigi,
    },

    {
      title: 'Gigi, Bandra',
      rating: '4.4',
      location: 'Linking Road, Bandra West, Mumbai',
      cuisines: 'Japanese | European',
      price: '₹4000 for two',
      image: sampleimg,
      fun: handleClickGigi,
    },

    {
      title: 'Gigi, Bandra',
      rating: '4.4',
      location: 'Linking Road, Bandra West, Mumbai',
      cuisines: 'Japanese | European',
      price: '₹4000 for two',
      image: sampleimg,
      fun: handleClickGigi,
    },

    {
      title: 'Gigi, Bandra',
      rating: '4.4',
      location: 'Linking Road, Bandra West, Mumbai',
      cuisines: 'Japanese | European',
      price: '₹4000 for two',
      image: sampleimg,
      fun: handleClickGigi,
    },
    
  ];

  const [middleCardIndex, setMiddleCardIndex] = useState(0);

  useEffect(() => {
    if (width > 768) {
      const swiper = new window.Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        mousewheel: true,
        on: {
          slideChange: function () {
            setMiddleCardIndex(this.activeIndex);
          },
        },
      });

      setMiddleCardIndex(Math.floor(cardData.length / 2));
    }
  }, [width]);

  return (
    <div className="collection">
      <div className="carasouel">
        <div className="headtext">All collections in Mumbai</div>

        {width > 768 ? (
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {cardData.map((element, index) => (
                <div
                  key={index}
                  className={`swiper-slide ${index === middleCardIndex && width > 768 ? 'swiper-slide-middle' : ''}`}
                >
                  <Restaurant_card
                    title={element.title}
                    rating={element.rating}
                    location={element.location}
                    cuisines={element.cuisines}
                    price={element.price}
                    image={element.image}
                    onClick={element.fun}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="vertical-cards">
            {cardData.map((element, index) => (
              <div key={index} className="vertical-card">
                <Restaurant_card
                  title={element.title}
                  rating={element.rating}
                  location={element.location}
                  cuisines={element.cuisines}
                  price={element.price}
                  image={element.image}
                  onClick={element.fun}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mumbai_collection;
