import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../../styles';
import Link from '@material-ui/core/Link';

export default () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          NAver SHopping LIve
          <br></br>
          <Link color="inherit" href="https://blog.naver.com/lsi0503" target="_blank">
            <u>by 짠벨로퍼</u>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
