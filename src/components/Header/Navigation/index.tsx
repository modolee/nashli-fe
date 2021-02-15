import { useStyles } from '../../../styles';
import React, { Fragment } from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

export default () => {
  const classes = useStyles();
  return (
    <Fragment>
      <nav style={{ textAlign: 'center' }}>
        <Link variant="button" color="textPrimary" href="/" className={classes.link} underline="always">
          네이버쇼핑 라이브 스케줄
        </Link>
        <Link variant="button" color="textPrimary" href="/npay" className={classes.link} underline="always">
          네이버페이 적립링크
        </Link>
      </nav>
      {/*<Button href="#" color="primary" variant="outlined" className={classes.link}>*/}
      {/*  Login*/}
      {/*</Button>*/}
    </Fragment>
  );
};
