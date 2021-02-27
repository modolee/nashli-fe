import React from 'react';
import AdPickView from './ad-pick.view';

export default () => {
  const banners = [
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
    {
      img: './ads/arcana_tactics.png', // 아르카나 택틱스 (640)
      url: 'https://nefing.com/53c9b3f',
    },
    {
      img: './ads/icarus.png', // 이카루스 (800)
      url: 'https://nefing.com/56487b5',
    },
    {
      img: './ads/odyssey.png', // 오디세이 (500)
      url: 'https://nefing.com/171393f',
    },
    {
      img: './ads/summoners_war.png', // 서머너즈워 (600)
      url: 'https://nefing.com/36a4229',
    },
    {
      img: './ads/samkuk.png', // 열혈군영전 (560)
      url: 'https://nefing.com/47d496f',
    },
    {
      img: './ads/dk.png', // DK (700)
      url: 'https://nefing.com/7bda4c0',
    },
  ];

  return <AdPickView banners={banners} />;
};
