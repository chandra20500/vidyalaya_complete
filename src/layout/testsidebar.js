import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Topbar from './teachers/Topbar';
import Button from '@material-ui/core/Button';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PhoneTwoToneIcon from '@material-ui/icons/PhoneTwoTone';
import LaunchIcon from '@material-ui/icons/Launch';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SchoolIcon from '@material-ui/icons/School';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100%)`,
    },
  },
  toolbar: {
    minWidth:'64px',
  },
  drawerPaper: {
    width: drawerWidth,
    position:'absolute',
    top:'64px',
    height:`calc(100% - 64px)`
  },
  topbar_root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
    fontSize: '0.8rem'
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
  sideicon:{
    color: 'rgb(80,87,155)',
  },
  drawerContainer: {
    overflow: 'auto',
    width: '80%',
    alignSelf:'center',
    position:'relative',
    top:'20px'
  },
}));


export default function ResponsiveDrawer(props) {
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

  const drawer = (
    <div>
      <CssBaseline />
        <div style={{display:'flex',flexDirection:'column'}}>
          <div className={classes.drawerContainer}>
          <div>
            <List>
              <ListItem selected={selected == "/dashboard" ? 1 : 0}  onClick={() => routeChange('/dashboard')}>
               <ListItemIcon className={classes.sideicon} ><SchoolIcon /></ListItemIcon>
               <ListItemText secondary={"My Classroom"} />   
              </ListItem>
            </List>
          </div>
          <Typography variant="overline">
            MANAGE
          </Typography>
          <List>
              <ListItem selected={selected == "/video" ? 1 : 0} onClick={() => routeChange('/video')}>
                <ListItemIcon className={classes.sideicon}><MovieCreationIcon /></ListItemIcon>
                <ListItemText secondary={"Video"} />
              </ListItem>
              <ListItem selected={selected == "/assignment" || selected =="/grading" ? 1 : 0} onClick={() => routeChange('/assignment')}>
                <ListItemIcon className={classes.sideicon}><AssignmentIcon /></ListItemIcon>
                <ListItemText secondary={"Assignments"} />
              </ListItem>
              <ListItem onClick={() => routeChange('video')}>
                <ListItemIcon className={classes.sideicon}><NoteAddIcon /></ListItemIcon>
                <ListItemText secondary={"Notes"} />
              </ListItem>
          </List>
          <Typography variant="overline">
            OTHERS
          </Typography>
          <List>
              <ListItem>
                <ListItemIcon className={classes.sideicon}><SettingsOutlinedIcon /></ListItemIcon>
                <ListItemText secondary={"Video"} />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.sideicon}><PhoneTwoToneIcon /></ListItemIcon>
                <ListItemText secondary={"Assignments"} />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.sideicon}><LaunchIcon /></ListItemIcon>
                <ListItemText secondary={"Notes"} />
              </ListItem>
          </List>
        </div>
        </div>
    </div>
  );
  
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.topbar_root}>
      <CssBaseline />
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

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

