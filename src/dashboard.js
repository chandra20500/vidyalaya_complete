import React from 'react';
import Layout from './layout/teachers/index';
import Layout2 from './layout/student/index';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './components//teacher/sidebar.js';
import Dashboard from './components//teacher/dashboard/dashboard.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TeacherLayout from './layout/testsidebar.js';

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
    padding: theme.spacing(3),
    marginLeft: '20vw',
    },
  },
  container:{
    backgroundColor: '#EFF3F9',
    height: '100vh',
    position:'relative',
    overflowY:'hidden',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <TeacherLayout />
      <main className={classes.content}>
        <Toolbar />
        <Sidebar />
        <Dashboard />
      </main>
    </div>
  );
}
