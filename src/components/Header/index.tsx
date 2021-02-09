import React, { Fragment } from 'react';
import AdPick from '../Ads/AdPick';
import TopBar from './TopBar';

export default () => {
  return (
    <Fragment>
      <TopBar />
      <AdPick />
    </Fragment>
  );
};
