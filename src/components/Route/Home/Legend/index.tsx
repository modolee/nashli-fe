import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import {
  REWARD_MAYBE,
  REWARD_NO,
  REWARD_NOTSURE,
  REWARD_YES,
  REWARD_PROBABLY,
} from '../../../../constants/reward.constant';
import Container from '@material-ui/core/Container';
import { useStyles } from '../../../../styles';

export default () => {
  const rewardIconStyle = { fontSize: '25px' };
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="article" className={classes.heroContent}>
      <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
        네이버쇼핑 라이브 스케줄
      </Typography>

      <Typography variant="h6" align="center" color="textSecondary" component="p">
        <span style={rewardIconStyle}>{REWARD_YES}</span>: 네이버 페이 포인트 지급 확정
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        <span style={rewardIconStyle}>{REWARD_PROBABLY}</span>: 네이버 페이 포인트 지급 가능성 있음 (높음)
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        <span style={rewardIconStyle}>{REWARD_MAYBE}</span>: 네이버 페이 포인트 지급 가능성 있음 (낮음)
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        <span style={rewardIconStyle}>{REWARD_NO}</span>: 네이버 페이 포인트 미지급 확정
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" component="p">
        <span style={rewardIconStyle}>{REWARD_NOTSURE}</span>: 알 수 없음
      </Typography>
    </Container>
  );
};
