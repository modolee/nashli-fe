import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './index.css';

export default ({ banners }: { banners: { img: string; url: string }[] }) => {
  const properties = {
    duration: 1000,
    transitionDuration: 500,
    infinite: true,
    arrows: false,
    easing: 'ease',
  };

  return (
    <div className="slide-wrapper">
      <Slide {...properties}>
        {banners.map(banner => (
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${banner.img})` }}
              onClick={() => {
                window.open(banner.url, '_blank');
              }}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};
