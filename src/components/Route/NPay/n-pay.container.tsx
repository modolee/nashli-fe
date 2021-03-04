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
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_kbinsure_2103_1_30_0',
      reward: 30,
      createdAt: '2021-03-04',
    },
  ];

  return <NPayView nPayLinks={dailyLinks} campaignLinks={campaignLinks} />;
};

export default NPayContainer;
