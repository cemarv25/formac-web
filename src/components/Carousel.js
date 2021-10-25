import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../hooks';

const Carousel = ({ images }) => {
  const isLarge = useMediaQuery('(min-width: 700px)');
  const carouselRef = useRef();
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = (e) => {
    pos = {
      // The current scroll
      left: carouselRef.current.scrollLeft,
      top: carouselRef.current.scrollTop,
      // Get current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    // Change the cursor and prevent user from selecting the text
    carouselRef.current.style.cursor = 'grabbing';
    carouselRef.current.style.userSelect = 'none';
  };

  const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    carouselRef.current.style.cursor = 'grab';
    carouselRef.current.style.removeProperty('user-select');
  };

  const mouseMoveHandler = (e) => {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;
    // Scroll the element
    carouselRef.current.scrollTop = pos.top - dy;
    carouselRef.current.scrollLeft = pos.left - dx;
  };

  useEffect(() => {
    carouselRef.current.addEventListener('mousedown', mouseDownHandler);
  }, []);

  return (
    <div ref={carouselRef} className="carousel-container">
      {images.map((image, index) => (
        <div key={index} className="carousel-cell">
          <img src={image} draggable={false} height={isLarge ? 250 : 100} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
