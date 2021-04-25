import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

export default () => {
  return (
    <Fragment>
      <Typography variant="body2" color="textSecondary" align="center">
        {
          '이 사이트는 쿠팡 파트너스 활동의 일환으로 광고를 표시하고 있으며, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.'
        }
      </Typography>
      <iframe src="./coupang.html" width="100%" height="216px" frameBorder="0" scrolling="no" />
    </Fragment>
  );
};
