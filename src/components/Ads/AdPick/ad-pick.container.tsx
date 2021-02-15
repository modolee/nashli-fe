import React from 'react';
import AdPickView from './ad-pick.view';

export default () => {
  const banners = [
    {
      img: './ads/hackers_toefl.png',
      url: 'https://nefing.com/466faa2',
    },
    {
      img: './ads/hackers_police.png',
      url: 'https://nefing.com/239a4eb',
    },
    {
      img: './ads/10000recipe.png',
      url: 'https://bitl.kr/WVLjQP',
    },
    {
      img: './ads/casamom.png',
      url: 'https://bitl.kr/YnvrFU',
    },
    {
      img: './ads/coupang-erato.png',
      url: 'https://bitl.kr/XFIkhO',
    },
    {
      img: './ads/mario-case.png',
      url: 'https://bitl.kr/HP2Bhd',
    },
    {
      img: './ads/wingbling.png',
      url: 'https://bitl.kr/jIoCaA',
    },
  ];

  return <AdPickView banners={banners} />;
};
