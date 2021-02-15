import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import NPay from './NPay';

export default () => {
  return (
    <Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/npay" exact component={NPay} />
    </Fragment>
  );
};
