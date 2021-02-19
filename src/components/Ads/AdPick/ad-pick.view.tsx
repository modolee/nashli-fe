import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './index.css';
import { APP_ENV } from '../../../constants/environment.constant';

export default ({ banners }: { banners: { img: string; url: string }[] }) => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: false,
    easing: 'ease',
  };

  /**
   * 개발 환경에서는 구글로 연결되도록
   * @param url
   */
  const getBannerUrl = (url: string) => {
    return APP_ENV === 'production' ? url : 'https://www.google.com';
  };

  return (
    <div className="slide-wrapper">
      <Slide {...properties}>
        {banners.map(banner => (
          <img
            src={banner.img}
            className="each-slide"
            onClick={() => {
              window.open(getBannerUrl(banner.url), '_blank');
            }}
          />
        ))}
      </Slide>
    </div>
  );
};
