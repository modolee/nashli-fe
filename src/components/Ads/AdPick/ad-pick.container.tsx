import React from 'react';
import AdPickView from './ad-pick.view';

export default () => {
  const banners = [
    {
      img: './ads/kakao_navi.png', // 카카오네비 (140)
      url: 'https://nefing.com/8aa39a8',
    },
    {
      img: './ads/seezn.png', // 시즌 (80)
      url: 'https://nefing.com/471e842',
    },
    {
      img: './ads/promi.png', // DB손해보험 (70)
      url: 'https://nefing.com/26ef2a7',
    },
    {
      img: './ads/galaxy_s21_5g.png', // 갤럭시 S21 (150)
      url: 'https://nefing.com/3780bdb',
    },
    {
      img: './ads/gongsin.png', // 공신닷컴 (120)
      url: 'https://nefing.com/43a690e',
    },
    {
      img: './ads/kb_electro.png', // 소액적금 (120)
      url: 'https://nefing.com/433eaf4',
    },
    {
      img: './ads/coway.png', // 커피값 정수기 (70)
      url: 'https://nefing.com/6918edd',
    },
    {
      img: './ads/real_water.png', // 미세플라스틱 필터 (60)
      url: 'https://nefing.com/7a33888',
    },
    {
      img: './ads/db_soil.png', // DB손해보험 (3500)
      url: 'https://nefing.com/64b5189',
    },
    {
      img: './ads/cookie_kingdom.png', // 쿠키런 (2200)
      url: 'https://nefing.com/246684f',
    },
  ];

  return <AdPickView banners={banners} />;
};
