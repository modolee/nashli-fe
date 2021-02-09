import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { REWARD_MAYBE, REWARD_NO, REWARD_NOTSURE, REWARD_YES } from '../../../constants/reward.constant';

export default () => {
  return (
    <Fragment>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        {REWARD_YES}: 네이버 페이 포인트 지급 언급
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        {REWARD_MAYBE}: 부적합한 시청 행위 언급
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        {REWARD_NOTSURE}: 아무 언급 없음
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        {REWARD_NO}: 네이버 페이 포인트 지급 안함 언급
      </Typography>
    </Fragment>
  );
};
