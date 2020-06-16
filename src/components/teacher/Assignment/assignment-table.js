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
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

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
  createData('Write an Essay', 'May 10, 2020','May 10, 2020 2:00PM', 0, 0),
  createData('Write a letter', 'May 10, 2020','May 10, 2020 2:00PM', 1, 1),
  createData('Write an Essay', 'May 10, 2020','May 10, 2020 2:00PM', 1, 0),
  createData('Write an Essay', 'May 10, 2020','May 10, 2020 2:00PM', 1, 0),
  createData('Write an Essay', 'May 10, 2020','May 10, 2020 2:00PM', 1, 0),
  createData('Write an Essay', 'May 10, 2020','May 10, 2020 2:00PM', 1, 0),
  createData('Write an Essay', 'May 10, 2020','May 10, 2020 2:00PM', 1, 0),
  createData('Write an Essay', 'May 10, 2020','May 10, 2020 2:00PM', 1, 0),
  createData('Write an Essay', 'May 10, 2020','May 10, 2020 2:00PM', 1, 0),
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
            <TableCell style={{opacity:'0.84',color:'#8A929F'}}>Title</TableCell>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}} align="center">Created On</TableCell>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}}align="center">Deadline</TableCell>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}} align="center">Submitted</TableCell>
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
              <TableCell align="center">{row.Submitted ? <CheckCircleIcon style={{color:'green'}} /> : "No"}</TableCell>
              <TableCell align="center">
                <Button variant="outlined" color="primary" href="#outlined-buttons">
                  Details
                </Button>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick2}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open2}
                    onClose={handleClose2}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '200px',
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose2}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <Snackbar
          open={popup.open}
          onClose={closePopup}
          message="Successfully Assigned !"
        />
      </div>
    </TableContainer>
  );
}
