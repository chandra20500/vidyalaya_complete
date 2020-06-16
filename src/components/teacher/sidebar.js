import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  /*sidebar_root: {
    position:'absolute',
    left:'83vw'
  },*/
  sidebar_root: {
    [theme.breakpoints.down('md')]: {
      display:'none',
    },
    [theme.breakpoints.up('md')]: {
    position:'absolute',
    left:'83vw'
    },
    [theme.breakpoints.up('lg')]: {
    position:'absolute',
    left:'83vw'
    },
  },
  sidebar: {
    width: '15vw',
    height: theme.spacing(70),
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4),
    flexShrink: 0,
  },
  heading:{
    fontWeight: 600,
    color: '#5C626D',
  },
  button_sidebar:{
    paddingLeft:'0px',
    textTransform:'none',
    color:'#5C626D',
    fontSize:'medium',
    justifyContent:'flex-start',
    paddingLeft:'5px',
    marginTop:'5px',
    marginBottom:'5px',
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.sidebar_root}>
      <Paper className={classes.sidebar}>
        <Typography variant="button" gutterBottom className={classes.heading}>
          Getting Started
        </Typography>
        <Button 
          fullWidth
          className={classes.button_sidebar}
          size={'small'}
        >
         Create a subject
        </Button>
        <Divider />
        <Button 
          fullWidth
          className={classes.button_sidebar}
          size={'small'}
        >
         Create a resource
        </Button>
        <Divider style={{marginLeft:'5px'}} />
        <Button 
          fullWidth
          className={classes.button_sidebar}
          size={'small'}  
        >
         Browse the library
        </Button>
      </Paper>
    </div>
  );
}