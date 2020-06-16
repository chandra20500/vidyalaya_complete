import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import View_assignment from './view-assignment.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;
const mainWidth = 1000;

const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(3),
    paddingTop:'10px'
    },
  },
  container:{
    backgroundColor: '#EFF3F9',
    height: '100vh',
    position:'relative',
    overflowY:'hidden',
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
  nav:{
    opacity: 0.74,
    fontSize: '0.8rem'
  }, 
  heading:{
    flexGrow: 1,
    fontStyle: 'italic',
    fontWeight: '800',
    position: 'relative',
    left: theme.spacing(3)
  },
}));

export default function ButtonAppBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const location = document.location.pathname;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selected , ChangeSelect] = React.useState(location);

  const [destintion, setDestination] = React.useState("dashboard2");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = useHistory();

  const routeChange = (p) => {
    let path = `${p}`;
    ChangeSelect(`${p}`);
    console.log({selected});
    history.push(path);
  };
  
  const topbar = (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <MenuIcon className={classes.menuButton} onClick={handleDrawerToggle} />
            <Typography variant="h5" className={classes.heading}>
              Vidyalaya
            </Typography>
            <Button color="inherit" className={classes.nav}>contact</Button>
            <Button color="inherit" className={classes.nav}>Login</Button>
          </Toolbar>
      </AppBar>
    </div>
  )

  return (
    <div className={classes.container}>
      <main className={classes.content}>
        <div>{topbar}</div>
        <Toolbar />
        <View_assignment />
      </main>
    </div>
  );
}
