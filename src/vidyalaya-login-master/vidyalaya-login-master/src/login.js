import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import TextField from '@material-ui/core/TextField';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#707070',
    height:'100vh',
    flexWrap: 'wrap',
  },
  paper:{
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(40),
      position: 'absolute',
      paddingLeft: '3%',
      paddingRight: '3%',
      paddingTop:'2%',
      top: '20%',
      transform: 'translateY(-50%)',
      left: '50%',
      transform: 'translateX(-50%)',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  loginheading:{
    color:'#50579B',
    fontWeight:'400',
  },
  paperCircle: {
    borderRadius:'50%',
    position: 'relative',
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  cancel:{
    position: 'absolute',
    fontSize: 'medium',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3} >
          <Grid container spacing={3}>
            <Grid item xs={10}>
            <Typography className={classes.loginheading} variant="h6">Login</Typography>
            </Grid>
            <Grid item xs={2}>
                <Paper className={classes.paperCircle}>
                  <CloseOutlinedIcon color={'error'} className={classes.cancel} />
                </Paper>
            </Grid>
          </Grid>
          <Box mt={5}>
            <TextField
             fullWidth
             id="outlined-margin-dense"
             size="small"
             label="Email Address" 
             variant="outlined" 
            />
          </Box>
          <Box mt={2}>
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Password"
              size="small"
              type="password"
              variant="outlined"
            />
          </Box>
          <Box mt={0.5}>
            <Typography color="primary" variant="caption" display="block" >
              Forgot Password ?
            </Typography>
          </Box>
          <Box mt={3}>
            <Button 
              variant="contained"
              color="primary" 
              href="#contained-buttons"
              fullWidth
            >
              Login
            </Button>
          </Box>

          <Box mt={1} display="inline">
            <Typography
             color="textSecondary" 
             variant="caption" 
            >
              Don't have an account ?
            </Typography>
          </Box>
          <Box display="inline" ml={1}>
            <Typography
             color="primary"
             variant="caption" 
            >
              Sign Up now
            </Typography>
          </Box>
      </Paper>
    </div>
  );
}

  