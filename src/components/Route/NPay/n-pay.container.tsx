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
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_hanacardr_2102_30',
      reward: 30,
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_directdb_2102_30',
      reward: 30,
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_carrotins_2102_30',
      reward: 30,
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_paymobileplan_2102_30',
      reward: 30,
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_kebhanabanking_2102_1_30',
      reward: 30,
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_nain_2102_10',
      reward: 10,
    },
    {
      url: 'https://campaign.naver.com/npay/click-point/?eventId=cr_wonderbra_2102_10',
      reward: 10,
    },
  ];

  return <NPayView nPayLinks={dailyLinks} campaignLinks={campaignLinks} />;
};

export default NPayContainer;
