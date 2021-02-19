import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './index.css';

export default ({ banners }: { banners: { img: string; url: string }[] }) => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: false,
    easing: 'ease',
  };

  return (
    <div className="slide-wrapper">
      <Slide {...properties}>
        {banners.map(banner => (
          <img
            src={banner.img}
            className="each-slide"
            onClick={() => {
              window.open(banner.url, '_blank');
            }}
          />
        ))}
      </Slide>
    </div>
  );
};
