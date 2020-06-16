import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

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
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.topbar_root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <MenuIcon className={classes.menuButton} />
          <Typography variant="h5" className={classes.heading}>
            Vidyalaya
          </Typography>
          <Button color="inherit" className={classes.nav}>contact</Button>
          <Button color="inherit" className={classes.nav}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
