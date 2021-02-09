import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { REWARD_YES, REWARD_NO, REWARD_MAYBE, REWARD_NOTSURE } from '../../constants/reward.constant';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 2, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const adPickData = [
  {
    url: 'https://bitl.kr/HP2Bhd',
    img: './ads/mario_case.png',
  },
  {
    url: 'https://bitl.kr/jIoCaA',
    img: './ads/wingbling.png',
  },
];

const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
};

const AdPick = () => {
  const adIndex = getRandomIntInclusive(0, adPickData.length - 1);
  return (
    // <iframe
    //   src="https://adpick.co.kr/nativeAD/ad.php?bannerType=type10&limit=1&affid=f7818d&frameId=AdpickAdFrame_202128%40235457&popup=false"
    //   width="100%"
    //   frameBorder="0"
    //   scrolling="no"
    //   data-adpick_nativeAD
    //   id="AdpickAdFrame_202128@235457"
    // ></iframe>
    <div style={{ textAlign: 'center' }}>
      <a href={adPickData[adIndex].url} target="_blank">
        <img src={adPickData[adIndex].img} style={{ width: '100%', maxWidth: '960px' }} />
      </a>
    </div>
  );
};

const CoupangPartners = () => {
  return <iframe src="./coupang.html" width="100%" height="200px" frameBorder="0" scrolling="no" />;
};

const AdSense = () => {
  return <iframe src="./adsense.html" width="0" height="0" frameBorder="0" scrolling="no" />;
};

const Copyright = () => {
  return (
    <Fragment>
      <Typography variant="body2" color="textSecondary" align="center">
        {
          '이 사이트는 쿠팡 파트너스 활동의 일환으로 광고를 표시하고 있으며, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.'
        }
      </Typography>
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

const Navigation = () => {
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

const RewardIcon = (reward: string) => {
  switch (reward) {
    case 'RewardYes':
      return REWARD_YES;
    case 'RewardNo':
      return REWARD_NO;
    case 'RewardMaybe':
      return REWARD_MAYBE;
    case 'RewardNotSure':
      return REWARD_NOTSURE;
  }
};

export const MainView = ({ date, count, schedule }: { date: string; count: number; schedule: any }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AdPick />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            NAver SHopping LIve
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          네이버쇼핑 라이브 스케줄
        </Typography>
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
      </Container>
      <AdSense />
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {/* Enterprise card is full width at sm breakpoint*/}
          <Grid item key={`title_${date}`} xs={12} sm={12} md={12}>
            <Card>
              <CardHeader
                title={date}
                subheader={`${count}개의 방송`}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                // action={tier.title === 'Pro' ? <StarIcon /> : null}
                className={classes.cardHeader}
              />
              <CardContent>
                <ul>
                  {schedule.length &&
                    schedule.map(([time, broadcasts]: any[], index: number) => {
                      return (
                        <div key={index}>
                          <div className={classes.cardPricing}>
                            <Typography component="h2" variant="h4" color="textPrimary">
                              {time}
                            </Typography>
                          </div>
                          <div>
                            {broadcasts.length &&
                              broadcasts.map(
                                ({
                                  id,
                                  title,
                                  broadcastUrl,
                                  brideUrl,
                                  reward,
                                }: {
                                  id: number;
                                  title: string;
                                  broadcastUrl: string;
                                  brideUrl: string;
                                  reward: string;
                                }) => (
                                  <div key={id}>
                                    <Typography component="li" variant="body1" align="center" key={`title_${id}`}>
                                      {`${RewardIcon(reward)} ${title}`}
                                    </Typography>
                                    <Typography component="li" variant="body2" align="center" key={`url_${id}`}>
                                      <a href={broadcastUrl} target="_blank">
                                        {broadcastUrl}
                                      </a>
                                    </Typography>
                                    <br />
                                  </div>
                                ),
                              )}
                          </div>
                        </div>
                      );
                    })}
                </ul>
              </CardContent>
              {/*<CardActions>*/}
              {/*  <Button fullWidth color="primary">*/}
              {/*    {tier.buttonText}*/}
              {/*  </Button>*/}
              {/*</CardActions>*/}
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/*Footer*/}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <CoupangPartners />
        <Copyright />
      </Container>
      {/*End footer*/}
    </React.Fragment>
  );
};
