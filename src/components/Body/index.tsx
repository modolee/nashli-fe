import React from 'react';
import Title from './Title';
import Legend from './Legend';
import Schedule from './Schedule';
import Container from '@material-ui/core/Container';
import { useStyles } from '../../styles';

export default () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="sm" component="article" className={classes.heroContent}>
        <Title />
        <Legend />
      </Container>
      <Schedule />
    </React.Fragment>
  );
};
