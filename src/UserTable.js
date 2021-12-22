import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import Row from './Row';

const UserTable = ({ tableData, deleteTask }) => {
  // console.log(props.tableData);
  // console.log(tableData);
  // const { name, email, cell, dob } = tableData.user;

  return (
    <TableContainer component={Paper} style={{ width: '50%', margin: 'auto', marginTop: '20px' }}>
      <Table sx={{ maxWidth: 1000 }} size='small' aria-label='a dense table'>
        <TableHead style={{ backgroundColor: 'gray' }}>
          <TableRow>
            <TableCell align='center'>
              <strong>Firstname</strong>
            </TableCell>
            <TableCell align='center'>
              <strong>Email</strong>
            </TableCell>
            <TableCell align='center'>
              <strong>Phone</strong>
            </TableCell>
            <TableCell align='center'>
              <strong>Age</strong>
            </TableCell>
            <TableCell align='center'>
              <strong>Tools</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(row => (
            <Row row={row} deleteTask={deleteTask} key={row.email} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
