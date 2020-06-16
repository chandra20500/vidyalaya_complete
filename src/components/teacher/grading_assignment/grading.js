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
import TextField from '@material-ui/core/TextField';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AttachmentIcon from '@material-ui/icons/Attachment';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom';
import Grading_table from './grading_table.js';

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
      marginTop:'30px'
    },
    marginTop:'15px', 
    backgroundColor:'white',
    paddingLeft:'20px',
    paddingTop:'20px',
    paddingRight:'20px',
    width:'50vw',
    width:'100%',
    borderRadius:'10px'
  },
  upload_options:{
    [theme.breakpoints.down('sm')]: {
        display:'block'
    },
      display:'flex',
  },
  dashed_box:{
    [theme.breakpoints.down('sm')]: {
      border:'1px dashed #707070',
      height:'120px',
      width:'200px',
      marginTop:'15px',
      marginLeft:'0px'
    },
    border:'1px dashed #707070',
    height:'120px',
    width:'200px',
    marginTop:'15px',
    marginLeft:'15px'
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const location = document.location.pathname;
  const [selected , ChangeSelect] = React.useState(location);
  const history = useHistory();
  const routeChange = (p) => {
    let path = `${p}`;
    ChangeSelect(`${p}`);
    console.log({selected});
    history.push(path);
  };

  return (
    <div className={classes.roots}> 
      <div style={{marginTop:'0.5em',display:'flex'}}
      onClick={() => routeChange('/assignment')}>
        <KeyboardBackspaceIcon 
            fontSize={'small'}
            />
          <p
            style={{marginTop:'0',marginLeft:'20px'}}>
            Go back
          </p>                                  
      </div>      
      <Grid container spacing={3} style={{marginTop:'20px',}}>
        <Grid item xs={12} sm={6}>
          <Typography
            style={{fontWeight:600,color:'#5C626D'}}
          >
              Assignment Details
          </Typography>
          <Typography variant="caption" style={{color:'#5C626D'}}>
            Upload your assign before deadline
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{position:'relative'}}>
          <Typography
            style={{position:'absolute',right:'0',transform:'translateX(-50%)',fontWeight:600,color:'#5C626D'}}
          >
              Due Date:12/06/2020
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.dialog_box}>
          <Grid container className={classes.dialog_container}>
            <Grid container style={{}}>
              <Typography variant="h6" style={{fontWeight:'600',opacity:'0.84',color:'#262626'}}>
                Write an essay on covid-19 in English. ( Max 1000 words)
              </Typography>
            </Grid>
            <Typography variant="subtitle2" style={{fontWeight:'600',opacity:'0.84',color:'#1423BC'}}>
              Instructions
            </Typography>
            <div style={{width:'100%',marginTop:'1em'}}>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor 
                incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum
              </Typography>
            </div>
            <div style={{width:'45vw',marginTop:'2em'}}>
              <div style={{marginTop:'0.5em',display:'flex'}}>
                  <AttachFileIcon 
                    fontSize={'small'}
                  />
                  <p
                   style={{marginTop:'0',marginLeft:'20px'}}>
                   Sample for writing essay.pdf
                  </p>
              </div>
              <div style={{marginTop:'0.5em',display:'flex'}}>
                  <AttachmentIcon fontSize={'small'}/>
                  <p
                   style={{marginTop:'0',marginLeft:'20px',color:'#3142F0'}}
                  >
                    <a href="#">visit this link for more reference</a>
                  </p>
              </div>
            </div>
          </Grid>
        </div>
        <div className={classes.dialog_box}>
          <Grid container className={classes.dialog_container}>
            <Grid container style={{}}>
              <Grid container spacing={3} style={{marginBottom:'30px',}}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    style={{fontWeight:600,color:'#5C626D'}}
                  >
                      <Typography variant="h6" style={{fontWeight:'600',opacity:'0.84',color:'#25B407'}}>
                        Submit your Answer
                      </Typography>
                      <Typography variant="body2">
                        <strong>Due Date:</strong>11:00AM to 12PM
                      </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} style={{position:'relative'}}>
                  <Typography
                    style={{position:'absolute',right:'0',transform:'translateX(-50%)',fontWeight:600,color:'#5C626D'}}
                  >
                      <Button variant="contained" color="primary">
                        End Submission
                      </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div>
            <Grading_table />
          </div>
        </div>
    </div>
  );
}
