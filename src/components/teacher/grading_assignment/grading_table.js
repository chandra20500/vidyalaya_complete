import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, created, deadline, Submitted, actions) {
  return { name, created, deadline, Submitted, actions };
}


const options = [
  'Assign to today class',
  'Delete',
];

const ITEM_HEIGHT = 24;

const rows = [
  createData('Ravi verma', '121233','July 04, 2019 1:00PM', 1, 0),
  createData('Ravi verma', '121233','July 04, 2019 1:00PM', 1, 0),
  createData('Ravi verma', '121233','July 04, 2019 1:00PM', 0, 0),
  createData('Ravi verma', '121233','July 04, 2019 1:00PM', 0, 0),
  createData('Ravi verma', '121233','July 04, 2019 1:00PM', 0, 0),
  createData('Ravi verma', '121233','July 04, 2019 1:00PM', 0, 0),
  createData('Ravi verma', '121233','July 04, 2019 1:00PM', 0, 0),
  createData('Ravi verma', '121233','July 04, 2019 1:00PM', 0, 0),
  createData('Ravi verma', '121233','July 04, 2019 1:00PM', 0, 0),
];

export default function SimpleTable() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open2 = Boolean(anchorEl);

  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [popup, setpopup] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

 
  const handleClose2 = () => {
    setAnchorEl(null);
    setpopup({ open: true});
    setTimeout(() => {
    setpopup({ open: false});      
    }, 2000);
    console.log("asdas");
  };

  const closePopup = () => {
    setpopup({ ...popup, open: false });
  };


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}}>Student</TableCell>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}} align="center">Roll</TableCell>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}}align="center">Submitted On</TableCell>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}} align="center">Status</TableCell>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.created}</TableCell>
              <TableCell align="center">{row.deadline}</TableCell>
              <TableCell align="center">{row.Submitted ? 
                <Typography variant="caption" style={{fontWeight:'600',color:'green'}}>
                  Checked
                </Typography> :
                <Typography variant="caption" style={{color:'#5C626D'}}>
                  Not Checked
                </Typography>}
              </TableCell>
              <TableCell align="center">
                <Button variant="outlined" color="primary" href="#outlined-buttons">
                  View
                </Button>
                <IconButton>
                    <CommentIcon />
                  </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
