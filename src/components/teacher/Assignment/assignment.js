import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import AssignmentTable from './assignment-table.js';
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

  const [AssignmentUpload, SetAssignmentUpload] = React.useState(false);

  const handlePopupOpen = () => {
    SetAssignmentUpload(true);
  };

  const handlePopupClose = () => {
    SetAssignmentUpload(false);
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
        <Grid item xs={12} sm={6}>
          <Typography
            style={{fontWeight:600,color:'#5C626D'}}
          >
              Assignment List
          </Typography>
          <Typography variant="caption" style={{color:'#5C626D'}}>
            Create assignment and assign to class
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} style={{display:'flex',flexDirection:'row-reverse'}}>
          <FormControl variant="outlined" className={classes.formControl} style={{width:'70%'}}>
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
        <Grid item xs={12} sm={3} style={{display:'flex',flexDirection:'row-reverse'}}>
          <Button
            variant="contained"
            color="primary"
            FullWidth
            onClick={handlePopupOpen}
            className={classes.button}
            startIcon={<AddCircleOutlineRoundedIcon />}
          >
            Add Assignment
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={AssignmentUpload}
        onClose={handlePopupClose}
        aria-labelledby="responsive-dialog-title"
        className={classes.dialog}
        maxWidth={'md'}
      >
        <div className={classes.dialog_box}>
          <Grid container className={classes.dialog_container}>
            <Grid container style={{marginBottom:'2em'}}>
              <Grid item xs={10}>
              <Typography variant="h6" style={{fontWeight:'600',opacity:'0.84',color:'#262626'}}>
                Add Assignment
              </Typography>
              </Grid>
              <Grid item xs={2}>
                <CancelRoundedIcon onClick={handlePopupClose} color={'disabled'} className={classes.close_dialog} />
              </Grid>
            </Grid>
            <div style={{width:'45vw'}}>
              <TextField
                className={classes.input_dialog}
                id="outlined-helperText"
                label="Assignment Title"
                defaultValue="Write an Essay"
                variant="outlined"
              />
            </div>
            <div style={{width:'45vw',marginTop:'2em'}}>
              <TextField
                className={classes.input_dialog}
                id="outlined-helperText"
                label="Instructions"
                multiline
                rows={2}
                defaultValue="Write some Instructions"
                variant="outlined"
              />
            </div>
            <div style={{width:'45vw',marginTop:'2em'}}>
              <Typography variant="button" style={{fontWeight:'600',opacity:'0.84',color:'#262626'}}>
                Add Attachment
              </Typography> 
              <div style={{marginTop:'0.5em',display:'flex'}}>
                  <AttachFileIcon fontSize={'small'}/><p style={{marginTop:'0',marginLeft:'20px'}}>Attach File</p>
              </div>
              <div style={{marginTop:'0.5em',display:'flex'}}>
                  <AttachmentIcon fontSize={'small'}/><p style={{marginTop:'0',marginLeft:'20px'}}>Attach File</p>
              </div>
            </div>
            <div style={{width:'45vw',marginTop:'2em'}}>
              <TextField
                  id="date"
                  label="Due Date"
                  type="date"
                  defaultValue="12-06-2020"
                  className={classes.date_dialog}
                  InputLabelProps={{
                    shrink: true,
                  }}
              />
            </div>
            <div style={{marginTop:'1em'}}>
                <FormControlLabel
                    control={<Checkbox color="primary" onChange={handleChange} name="gilad" />}
                    label="Schedule this Assignment"
                />
            </div>
            <div style={{width:'100%'}}>
              <Button onClick={handlePopupClose} variant="contained" color="primary" style={{width:'8vw',marginTop:'2em',marginBottom:'2em'}} href="#contained-buttons">
                Submit
              </Button>
            </div>
          </Grid>
        </div>
      </Dialog>
      <div style={{marginTop:'20px'}}>
        <AssignmentTable />
      </div>
    </div>
  );
}
