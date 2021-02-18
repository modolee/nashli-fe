import React, { Fragment } from 'react';
import AdPick from '../Ads/AdPick';
import TopBar from './TopBar';
import Navigation from './Navigation';
import { AD_FREE } from '../../constants/environment.constant';

export default () => {
  return (
    <Fragment>
      <TopBar />
      {!AD_FREE && <AdPick />}
      <Navigation />
    </Fragment>
  );
};
