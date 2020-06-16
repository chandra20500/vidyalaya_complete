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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

const options = [
  'Assign to today class',
  'Delete',
];

const ITEM_HEIGHT = 24;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, vlink,action) {
  return { name, vlink,action };
}

const rows = [
  createData('Chapter 1- Units & Measurement', 'https://youtube/vidyalaya', 0),
  createData('Chapter 1- Units & Measurement', 'https://youtube/vidyalaya', 1),
  createData('Chapter 1- Units & Measurement', 'https://youtube/vidyalaya', 1),
  createData('Chapter 1- Units & Measurement', 'https://youtube/vidyalaya', 1),
  createData('Chapter 1- Units & Measurement', 'https://youtube/vidyalaya', 1),
  createData('Chapter 1- Units & Measurement', 'https://youtube/vidyalaya', 1),
  createData('Chapter 1- Units & Measurement', 'https://youtube/vidyalaya', 1),
  createData('Chapter 1- Units & Measurement', 'https://youtube/vidyalaya', 1),
  createData('Chapter 1- Units & Measurement', 'https://youtube/vidyalaya', 1),
];

export default function SimpleTable() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);

  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl(null);
  };

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
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}}>Title</TableCell>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}} align="center">Video link</TableCell>
            <TableCell style={{opacity:'0.84',color:'#8A929F'}} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.vlink}</TableCell>
              <TableCell align="center">
                <Button onClick={() => routeChange('/grading')} variant="outlined" color="primary">
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
    </TableContainer>
  );
}
