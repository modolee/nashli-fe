import { useStyles } from '../../../styles';
import React, { Fragment } from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

export default () => {
  const classes = useStyles();
  return (
    <Fragment>
      <nav>
        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
          Features
        </Link>
        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
          Enterprise
        </Link>
        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
          Support
        </Link>
      </nav>
      <Button href="#" color="primary" variant="outlined" className={classes.link}>
        Login
      </Button>
    </Fragment>
  );
};
