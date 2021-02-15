import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from '../../../../styles';
import { REWARD_MAYBE, REWARD_NO, REWARD_NOTSURE, REWARD_YES } from '../../../../constants/reward.constant';

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

const ScheduleView = ({ date, count, schedule }: { date: string; count: number; schedule: any }) => {
  const classes = useStyles();

  return (
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
                                    <span style={{ fontSize: '25px' }}>{RewardIcon(reward)}</span> {title}
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
  );
};

export default ScheduleView;
