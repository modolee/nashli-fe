import React, { Fragment } from 'react';
import TopBar from './TopBar';
import Navigation from './Navigation';
import { AD_FREE } from '../../constants/environment.constant';
import CoupangPartners from '../Ads/CoupangPartners';

export default () => {
  return (
    <Fragment>
      <TopBar />
      {!AD_FREE && <CoupangPartners />}
      <Navigation />
    </Fragment>
  );
};
