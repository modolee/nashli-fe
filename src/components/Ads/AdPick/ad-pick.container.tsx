import React from 'react';
import AdPickView from './ad-pick.view';

export default () => {
  const adPickData = [
    {
      url: 'https://bitl.kr/HP2Bhd',
      img: './ads/mario_case.png',
    },
    {
      url: 'https://bitl.kr/jIoCaA',
      img: './ads/wingbling.png',
    },
  ];

  const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  };

  const adIndex = getRandomIntInclusive(0, adPickData.length - 1);

  return <AdPickView img={adPickData[adIndex].img} url={adPickData[adIndex].url} />;
};
