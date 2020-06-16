import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  heading:{
    flexGrow: 1,
    fontStyle: 'italic',
    fontWeight: '800',
    position: 'relative',
    left: theme.spacing(3)
  },
  nav:{
    opacity: 0.74,
    marginRight: theme.spacing(8)
  },  
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 1,
    backgroundColor: '#50579B',
  },
  icon:{
    padding: 0,
    height: '40px',
    width: '40px',
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.heading}>
            Vidyalaya
          </Typography>
          <div style={{display: 'flex' , flexDirection :'column' , alignItems :'flex-end'}}>
            <Typography variant="overline">
              Welcome, Mayur keshav
            </Typography>
            <Typography variant="caption">
              Last login: May 11, 2020 3:42PM
            </Typography>
          </div>
          <div style={{height:'40px' , width:'40px', marginRight:'5%',marginLeft:'1%'}}>
            <AccountCircle  className={classes.icon} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
