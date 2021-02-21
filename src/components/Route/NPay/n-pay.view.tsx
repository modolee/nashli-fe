import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from '../../../styles';
import { NPayLinkInterface } from './n-pay.interface';

const NPayView = ({
  nPayLinks,
  campaignLinks,
}: {
  nPayLinks: NPayLinkInterface[];
  campaignLinks: NPayLinkInterface[];
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container maxWidth="sm" component="article" className={classes.heroContent}>
        <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
          네이버페이 적립링크
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item key={`daily`} xs={12} sm={12} md={12}>
            <Card>
              <CardHeader
                title={'매일 적립'}
                // subheader={`적립 URL`}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                <ul>
                  {nPayLinks.length > 0 &&
                    nPayLinks.map((link: any, index: number) => (
                      <div key={index}>
                        <Typography component="li" variant="body1" align="center" key={`reward_${index}`}>
                          <span style={{ fontSize: '25px' }}>+ {link.reward}</span>
                        </Typography>

                        <Typography component="li" variant="body2" align="center" key={`url_${index}`}>
                          <a href={link.url} target="_blank">
                            {link.url}
                          </a>
                        </Typography>
                        <br />
                      </div>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid item key={`campaign`} xs={12} sm={12} md={12}>
            <Card>
              <CardHeader
                title={'이벤트 적립'}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                <ul>
                  {campaignLinks.length > 0 &&
                    campaignLinks.map((link: any, index: number) => (
                      <div key={index}>
                        <Typography component="li" variant="body1" align="center" key={`reward_${index}`}>
                          <span style={{ fontSize: '25px' }}>+ {link.reward} </span>
                          <span style={{ fontSize: '15px', color: 'red' }}>{link.createdAt} 추가</span>
                        </Typography>

                        <Typography component="li" variant="body2" align="center" key={`url_${index}`}>
                          <a href={link.url} target="_blank">
                            {link.url}
                          </a>
                        </Typography>
                        <br />
                      </div>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default NPayView;
