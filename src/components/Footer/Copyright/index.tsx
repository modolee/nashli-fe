import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default () => {
  return (
    <Fragment>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://blog.naver.com/lsi0503" target="_blank">
          JjanVeloper
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Fragment>
  );
};
