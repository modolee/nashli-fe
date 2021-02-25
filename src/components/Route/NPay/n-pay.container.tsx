import React from 'react';
import NPayView from './n-pay.view';
import { NPayLinkInterface } from './n-pay.interface';

const NPayContainer = () => {
  const dailyLinks: NPayLinkInterface[] = [
    {
      url: 'https://ofw.adison.co/u/naverpay/ads/72557',
      reward: 1,
    },
    {
      url: 'https://ofw.adison.co/u/naverpay/ads/55162',
      reward: 1,
    },
    {
      url: 'https://ofw.adison.co/u/naverpay/ads/66420',
      reward: 1,
    },
    {
      url: 'https://ofw.adison.co/u/naverpay/ads/67823',
      reward: 1,
    },
  ];

  const campaignLinks: NPayLinkInterface[] = [
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_naver_game_DA_d_001',
      reward: 100,
      createdAt: '2021-02-25',
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_jaju_2102_30',
      reward: 30,
      createdAt: '2021-02-24',
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_lifeplanet_2102_30',
      reward: 30,
      createdAt: '2021-02-22',
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_welcome_2102_2_30',
      reward: 30,
      createdAt: '2021-02-22',
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_nutrione_2102_30_1',
      reward: 30,
      createdAt: '2021-02-21',
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_kebhanabanking_2102_2_30',
      reward: 30,
      createdAt: '2021-02-19',
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_oder_benefit_2021',
      reward: 30,
      createdAt: '2021-02-19',
    },
  ];

  return <NPayView nPayLinks={dailyLinks} campaignLinks={campaignLinks} />;
};

export default NPayContainer;
