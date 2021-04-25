import React from 'react';
import Copyright from './Copyright';
import Container from '@material-ui/core/Container';
import { useStyles } from '../../styles';

export default () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" component="footer" className={classes.footer}>
      <Copyright />
    </Container>
  );
};
