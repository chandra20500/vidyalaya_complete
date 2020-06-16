import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SchoolIcon from '@material-ui/icons/School';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PhoneTwoToneIcon from '@material-ui/icons/PhoneTwoTone';
import LaunchIcon from '@material-ui/icons/Launch';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  /*root: {
    display: 'flex',
  },*/
  root: {
    /*[theme.breakpoints.down('sm')]: {
      display:'none',
    },
    [theme.breakpoints.up('md')]: {
    display:'none',
    },*/
    /*[theme.breakpoints.up('lg')]: {
    display: 'flex',
    },*/
  },
  menuButton:{
    [theme.breakpoints.up('md')]: {
    display: 'none',
  },
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    width: '80%',
    alignSelf:'center',
    position:'relative',
    top:'2%'
  },
  content: {
    padding: theme.spacing(3),
  },
  sideicon: {
    color : 'rgb(80,87,155)',
  },
  link:{
    marginRight: theme.spacing(2),
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Topbar = (
      <div className={classes.topbar_root} style={{position:'relative',zIndex:'200'}}>
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
      </div>
    );

  const drawer = (
    <div>
      <CssBaseline />
        <Toolbar />
        <div style={{display:'flex',flexDirection:'column'}}>
          <div className={classes.drawerContainer}>
          <div>
            <List>
              <ListItem selected={1} >
               <ListItemIcon className={classes.sideicon} ><SchoolIcon /></ListItemIcon>
               <ListItemText secondary={"My Classroom"} />   
              </ListItem>
            </List>
          </div>
          <Typography variant="overline">
            MANAGE
          </Typography>
          <List>
              <ListItem>
                <ListItemIcon className={classes.sideicon}><MovieCreationIcon /></ListItemIcon>
                <ListItemText secondary={"Video"} />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.sideicon}><AssignmentIcon /></ListItemIcon>
                <ListItemText secondary={"Assignments"} />
              </ListItem>
              <ListItem>
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

  /*const container = window !== undefined ? () => window().document.body : undefined;*/
  return (
      <div>
        <div className={classes.root}>
        <nav>
          <Hidden implementation="css">
              <Drawer
              className={classes.drawer}
                  variant="permanent"
                  classes={{
                    paper: classes.drawerPaper,
                  }}
              >   
                  {Topbar}
                  {drawer}
              </Drawer>
        </Hidden>
        <Hidden implementation="css">
            {Topbar}
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          > 
            {drawer}
            }
        </Drawer>
        </Hidden>
        </nav>
        </div>
      </div>
    );
}
