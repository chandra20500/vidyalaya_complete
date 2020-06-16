import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Assignment from './assignment.js';
import './dashboard.css'
import Videos from './videos.js';
import Notes from './notes.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Person from '@material-ui/icons/Person';

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
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  formControl: {
    backgroundColor:'white',
    width: '100%',
    padding: '0px',
  },
  label:{
    fontSize: '0.8rem'
  },
  Choose_class:{
    position:'relative',
    top:'50%',
    fontWeight:'600',
    color:'#5C626D',
    transform:'translateY(-50%)',
    fontSize:'1.2em',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery('(min-width:740px)');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.roots}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={2}>
          <Typography
           className={classes.Choose_class}
           display="block"
           >
              Choose Class
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel label={'dense'} id="demo-simple-select-outlined-label">Class</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              IconComponent={matches ? ArrowDropDownIcon : 'none'}
              label="Age"
           >
              <MenuItem value={10}>Class 8</MenuItem>
              <MenuItem value={10}>Class 9</MenuItem>
              <MenuItem value={20}>Class 10</MenuItem>
              <MenuItem value={30}>Class 11</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel label={'dense'} id="demo-simple-select-outlined-label">Choose Subject</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              IconComponent={matches ? ArrowDropDownIcon : 'none'}
              label="Age"
            >
              <MenuItem value={10}>Class 8</MenuItem>
              <MenuItem value={10}>Class 9</MenuItem>
              <MenuItem value={10}>Class 10</MenuItem>
              <MenuItem value={10}>Class 11</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={5} style={{display:'flex',flexDirection:'row-reverse'}}>
          <Typography
           style={{alignSelf:'center',marginLeft:'5px'}}
              >
              11:00AM to 12PM
          </Typography>
          <Typography
           style={{alignSelf:'center',fontWeight:'600'}}
           >
              Class timing:
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{marginTop:'20px'}}>
        <Grid item xs={12} sm={5}>
          <Typography
            style={{fontWeight:600,color:'#5C626D'}}
          >
          Assignments
          </Typography>
          <Typography variant="caption" style={{color:'#5C626D'}}>
            Check student Assignments
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7} style={{display:'flex',flexDirection:'row-reverse'}}>
          <FormControl variant="outlined" className={classes.formControl} style={{width:'30%'}}>
            <InputLabel label={'dense'} id="demo-simple-select-outlined-label">Filter Date</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Age"
              IconComponent={matches ? ArrowDropDownIcon : 'none'}
            >
              <MenuItem value={10}>
                Class 8
              </MenuItem>
              <MenuItem value={10}>Class 9</MenuItem>
              <MenuItem value={20}>Class 10</MenuItem>
              <MenuItem value={30}>Class 11</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div style={{marginTop:'20px'}}>
        <Assignment />
      </div>
      <Grid container spacing={3} style={{marginTop:'20px'}}>
        <Grid item xs={12} sm={6}>
          <Typography
            style={{fontWeight:600,color:'#5C626D'}}
          >
              Videos
          </Typography>
          <Typography variant="caption" style={{color:'#5C626D'}}>
            Videos for students
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{display:'flex',flexDirection:'row-reverse'}}></Grid>
      </Grid>
      <div style={{marginTop:'20px'}}>
        <Videos />
      </div>
      <Grid container spacing={3} style={{marginTop:'20px'}}>
        <Grid item xs={12} sm={6}>
          <Typography
            style={{fontWeight:600,color:'#5C626D'}}
          >
              Notes
          </Typography>
          <Typography variant="caption" style={{color:'#5C626D'}}>
            Notes for students
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{display:'flex',flexDirection:'row-reverse'}}></Grid>
      </Grid>
      <div style={{marginTop:'20px'}}>
        <Notes />
      </div>
    </div>
  );
}
