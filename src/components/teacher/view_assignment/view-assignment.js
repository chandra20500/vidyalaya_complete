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
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import LooksOneOutlinedIcon from '@material-ui/icons/LooksOneOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const useStyles = makeStyles((theme) => ({
  grade_roots: {
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
      height:'85vh',
      overflowX:'hidden',
      scrollbarWidth:'none',
    },
    [theme.breakpoints.up('md')]: {
      display:'flex',
      flexGrow: 1,
      height:'85vh',
      overflowX:'hidden',
      scrollbarWidth:'none',
    },
    [theme.breakpoints.up('lg')]: {
      display:'flex',
      flexGrow: 1,
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

  const [remarks, Setremarks] = React.useState(false);

  const handlePopupOpen = () => {
    Setremarks(true);
  };

  const handlePopupClose = () => {
    Setremarks(false);
  };

  return (
    <div className={classes.grade_roots}> 
    <div style={{flex:'1',paddingRight:'10px'}}>
      <Grid container spacing={3} style={{position:'relative',backgroundColor:'white',paddingLeft:'10px',paddingRight:'10px'}}>
        <Grid item xs={12} sm={6} style={{position:'relative'}}>
          <div style={{marginTop:'0.5em',display:'flex',top:'50%',position:'relative',transform:'translateY(-50%)'}}
              onClick={() => routeChange('/grading')}>
            <KeyboardBackspaceIcon 
              fontSize={'small'}
              />
            <p
              style={{marginTop:'0',marginLeft:'20px'}}>
              Mayur keshav
            </p>                                  
          </div> 
        </Grid>
        <Grid item xs={12} sm={6} style={{position:'relative'}}>
          <Typography
            style={{position:'absolute',right:'10px',fontWeight:600,color:'#5C626D',top:'50%',transform:'translateY(-50%)'}}
          >
              Submitted on:<strong>July 04, 2019 1:00PM</strong>
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
            <div>
            </div>
          </Grid>
          <Button style={{marginTop:'5vh'}} variant="contained" color="primary" onClick={handlePopupOpen}>
            Save as Submitted
          </Button>
      </div>
    </div>
    <div style={{flex:'1'}}>
      <Card style={{height:'85vh'}}>
        <CardMedia
          image="image.png"
          title="Paella dish"
          style={{backgroundSize:'contain',height:'90%',width:'100%'}}
        />
        <CardActions disableSpacing style={{backgroundColor:'#00000057'}}>
          <div style={{position:'relative',left:'50%',transform:'translateX(-50%)'}}>
              <IconButton aria-label="share">
                <SkipPreviousIcon style={{color:'white'}} />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <LooksOneOutlinedIcon style={{color:'white'}} />
          </IconButton>
          <IconButton aria-label="share">
            <SkipNextIcon style={{color:'white'}} />
          </IconButton>
          </div>
        </CardActions>
      </Card>                             
    </div>
    <Dialog
        open={remarks}
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
                Add Remarks
              </Typography>
              </Grid>
              <Grid item xs={2}>
                <CancelRoundedIcon onClick={handlePopupClose} color={'disabled'} className={classes.close_dialog} />
              </Grid>
            </Grid>
            <div style={{width:'45vw',marginTop:'1em'}}>
              <TextField
                className={classes.input_dialog}
                id="outlined-helperText"
                label="Description"
                multiline
                rows={4}
                defaultValue="Write some Description.."
                variant="outlined"
              />
            </div>
            <div>
              <Button onClick={handlePopupClose} variant="contained" color="primary" style={{width:'8vw',marginTop:'2em',marginBottom:'2em'}} href="#contained-buttons">
                Submit
              </Button>
            </div>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}
