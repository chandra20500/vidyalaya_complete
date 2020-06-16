import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Person from '@material-ui/icons/Person';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputBase from '@material-ui/core/InputBase';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import TextField from '@material-ui/core/TextField';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Icon from '@material-ui/core/Icon';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

const useStyles = makeStyles((theme) => ({
  roots: {
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
      height:'85vh',
      overflowX:'hidden',
      scrollbarWidth:'none',
    },
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      height:'85vh',
      overflowX:'hidden',
      scrollbarWidth:'none',
    },
    [theme.breakpoints.up('lg')]: {
      flexGrow: 1,
      width: '60vw',
      height:'85vh',
      overflowX:'hidden',
      scrollbarWidth:'none',
    },
  },
  card_root: {
  [theme.breakpoints.down('sm')]: {
      
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '1%',
    backgroundColor:'transparent',
    boxShadow: 'none'
    },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '1%',
    backgroundColor:'transparent',
    boxShadow: 'none'
  }
  },
  media:{
    
    [theme.breakpoints.down('sm')]: {
      width:'100%'
    },
  [theme.breakpoints.up('md')]: {
    width:'30%',
    height: '80%'
    },
  [theme.breakpoints.up('lg')]: {
    width:'30%',
    height: '80%'
  }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  return (
    <div className={classes.roots}>        
      <Grid container spacing={3} style={{marginTop:'20px'}}>
        <Grid item xs={12} sm={6}>
          <Typography
            style={{fontWeight:600,color:'#5C626D'}}
          >
              Videos
          </Typography>
          <Typography variant="caption" style={{color:'#5C626D'}}>
            Upload videos on youtube and manage it from here          
          </Typography>
        </Grid>
      </Grid> 
    <Card className={classes.card_root}>
      <CardMedia
        className={classes.media}
        component="iframe"
        title='test'
        width='140px'
        src='https://www.youtube.com/embed/ORFLCYV63CE'
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
            <div style={{display:'flex'}}>
                    <Typography component="h5" variant="h5"
                      style={{position:'relative',flex:'1'}}
                    >
                        Chapter 1- Units & Measurement
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{position:'relative',}}
                      endIcon={<ArrowDropDownOutlinedIcon />}
                    >Edit</Button>
            </div>
          
          <Typography variant="subtitle1" color="textSecondary">
             is dummy text used in laying out print, graphic or web designs.
             The passage is attributed to an unknown typesetter in the 15th 
          </Typography>
        </CardContent>
      </div>
    </Card>
    <Card className={classes.card_root}>
      <CardMedia
        className={classes.media}
        component="iframe"
        title='test'
        width='140px'
        src='https://www.youtube.com/embed/ORFLCYV63CE'
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
            <div style={{display:'flex'}}>
                    <Typography component="h5" variant="h5"
                      style={{position:'relative',flex:'1'}}
                    >
                        Chapter 1- Units & Measurement
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{position:'relative',}}
                      endIcon={<ArrowDropDownOutlinedIcon />}
                    >Edit</Button>
            </div>
          
          <Typography variant="subtitle1" color="textSecondary">
             is dummy text used in laying out print, graphic or web designs.
             The passage is attributed to an unknown typesetter in the 15th 
          </Typography>
        </CardContent>
      </div>
    </Card>
    </div>
  );
}
