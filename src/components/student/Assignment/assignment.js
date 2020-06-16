import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import AssignmentTable from './assignment_table.js';
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
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AttachmentIcon from '@material-ui/icons/Attachment';

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
  dialog_box:{
    [theme.breakpoints.down('sm')]: {
      width:'80vw',
    },
    width:'50vw',
    paddingLeft:'25px',
    paddingTop:'30px'
  },
  dialog:{
    maxWidth:'100%'
  },
  input_dialog:{
    [theme.breakpoints.down('sm')]: {
      width:'65vw',
    },
    width:'100%'
  },
  dialog_container:{
    [theme.breakpoints.down('sm')]: {
      display:'inline-table'
    }
  },
  close_dialog:{
    [theme.breakpoints.down('md')]: {
      position:'relative',
      left:'50%',
      transform:'translateX(-50%)'
    },
    [theme.breakpoints.down('lg')]: {
      position:'relative',
      left:'50%',
      transform:'translateX(-50%)'
    }
  },
  date_dialog: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
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
              Your Assignments
          </Typography>
          <Typography variant="caption" style={{color:'#5C626D'}}>
            All your assignments are listed here
          </Typography>
        </Grid>
      </Grid>
      <div style={{marginTop:'20px'}}>
        <AssignmentTable />
      </div>
    </div>
  );
}
