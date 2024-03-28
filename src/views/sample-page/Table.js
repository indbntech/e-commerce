import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('Type', "Hooded Neck,Paint Clothes"),
  createData('Sleeve', 'Full'),
  createData('Fit', 'Regular'),
  createData('Fabric', 'Hosiery,Smooth,Silk'),
  createData('Style', 'CV-TS9865'),
  createData('Ideal For', 'All'),
  createData('Size', 'Free'),
  createData('Pattern', 'Printed'),
  createData('Reversible', 'No'),
  createData('Secondary Color', 'Black,Brown'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>General</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}