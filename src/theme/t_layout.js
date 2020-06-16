import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.heading}>
            Vidyalaya
          </Typography>
          <Button color="inherit" className={classes.nav}>contact</Button>
          <Button color="inherit" className={classes.nav}>Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
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
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}
