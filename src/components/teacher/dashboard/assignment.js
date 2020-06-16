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

function createData(name, created, deadline, Submitted, actions) {
  return { name, created, deadline, Submitted, actions };
}

const rows = [
  createData('Write an Essay', 'May 10, 2020','May 10, 2020', 0, 0),
  createData('Write a letter', 'May 10, 2020','May 10, 2020', 1, 1),
];

export default function SimpleTable() {
  const classes = useStyles();

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
                {row.actions ? <DeleteIcon
                                 style={{
                                  color:'#5C626D',
                                  position:'relative',
                                  transform:'translateY(25%)',
                                  marginLeft:'5px'}} 
                                /> : 
                                <AccessAlarmsIcon
                                 style={{color:'#50579B',
                                         position:'relative',
                                         transform:'translateY(25%)',
                                         marginLeft:'5px'}} 
                                />
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
