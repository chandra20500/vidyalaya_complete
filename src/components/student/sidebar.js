import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const useStyles = makeStyles((theme) => ({
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

function generate(element) {
  return ['History','English','Learning Technology','Mathematics','Civics','Geography'].map((value) =>
                <ListItem>
                  <ListItemIcon>
                    <DoubleArrowIcon fontSize={'small'} />
                  </ListItemIcon>
                  <ListItemText
                    primary={value}
                  />
                </ListItem>
  );
}

export default function SimplePaper() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(true);
  return (
    <div className={classes.sidebar_root}>
    <Typography variant="subtitle2" gutterBottom className={classes.heading}>
      Your profile subjects:
    </Typography>
      <Paper className={classes.sidebar}>
        <Grid>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate()}
            </List>
          </div>
        </Grid>
      </Paper>
    </div>
  );
}