import React from 'react';
import Legend from './Legend';
import Schedule from './Schedule';
import { useStyles } from '../../../styles';

const Home = () => {
  return (
    <React.Fragment>
      <Legend />
      <Schedule />
    </React.Fragment>
  );
};

export default Home;
