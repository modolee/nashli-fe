import React, { Fragment } from 'react';
import AdPick from '../Ads/AdPick';
import TopBar from './TopBar';
import Navigation from './Navigation';

export default () => {
  return (
    <Fragment>
      <TopBar />
      <AdPick />
      <Navigation />
    </Fragment>
  );
};
