import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { REWARD_MAYBE, REWARD_NO, REWARD_NOTSURE, REWARD_YES } from '../../../constants/reward.constant';

export default () => {
  const rewardIconStyle = { fontSize: '25px' };
  return (
    <Fragment>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        <span style={rewardIconStyle}>{REWARD_YES}</span>: 네이버 페이 포인트 지급 언급
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        <span style={rewardIconStyle}>{REWARD_MAYBE}</span>: 네이버 페이 포인트 지급 가능성이 있음
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        <span style={rewardIconStyle}>{REWARD_NO}</span>: 네이버 페이 포인트 지급 안함 언급
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        <span style={rewardIconStyle}>{REWARD_NOTSURE}</span>: 아무 언급 없음
      </Typography>
    </Fragment>
  );
};
