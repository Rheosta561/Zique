import React, { useState } from 'react';
import './PhotoGrid.css';

const PhotoGrid = ({ arr }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Function to handle image click
  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setSelectedIndex(null);
  };

  // Navigate to the previous image
  const showPrevious = (e) => {
    e.stopPropagation(); // Prevent overlay click from closing
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : arr.length - 1));
  };

  // Navigate to the next image
  const showNext = (e) => {
    e.stopPropagation(); // Prevent overlay click from closing
    setSelectedIndex((prevIndex) => (prevIndex < arr.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <>
      {/* Photo Grid */}
      <div className="mainframe">
        {arr.map((image, index) => (
          <div
            key={index}
            className={`item i${index + 1}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
            onClick={() => handleImageClick(index)}
          ></div>
        ))}
      </div>

      {/* Overlay with Image Viewer */}
      {selectedIndex !== null && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="photo-container" onClick={(e) => e.stopPropagation()}>
            <button className="nav-btn prev-btn" onClick={showPrevious}>
              &#8592;
            </button>
            <img src={arr[selectedIndex]} alt="Selected" />
            <button className="nav-btn next-btn" onClick={showNext}>
              &#8594;
            </button>
            <button className="close-btn" onClick={closeOverlay}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGrid;
