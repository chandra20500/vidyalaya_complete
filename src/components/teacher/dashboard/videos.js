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
];

export default function SimpleTable() {
  const classes = useStyles();

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
                <Button variant="outlined" color="primary" href="#outlined-buttons">
                  Details
                </Button>
                <DeleteIcon
                  style={{
                  color:'#5C626D',
                  position:'relative',
                  transform:'translateY(25%)',
                  marginLeft:'5px'}} 
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
