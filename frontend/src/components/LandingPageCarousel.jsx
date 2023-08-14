import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const LandingPageCarousel = () => {
  const [dotPosition, setDotPosition] = useState('top');
  return (
    <>
      <Carousel dotPosition='left' draggable autoplay>
        <div>
          <img src="tetrix1.png" alt="" className='h-[200px] w-full ' />
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};
export default LandingPageCarousel;