import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TableSortLabel,
  Typography,
  Toolbar,
  IconButton,
  Tooltip,
  TableFooter,
  TablePagination
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Print, FileCopy, FilterList } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import productArray from './ProductArray.json';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: theme.spacing(1)
  }
}));

function ProductTable() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setData(productArray);
  }, []);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const isSelected = (id) => selectedRows.indexOf(id) !== -1;

  const handleSelectRow = (id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selectedRows, id];
    } else {
      newSelected = selectedRows.filter((rowId) => rowId !== id);
    }

    setSelectedRows(newSelected);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((row) => row.id);
      setSelectedRows(newSelecteds);
      return;
    }
    setSelectedRows([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedData = data
    .sort((a, b) => {
      if (sortBy === null) return 0;

      const comparison = a[sortBy].localeCompare(b[sortBy]);

      return sortOrder === 'asc' ? comparison : -comparison;
    })
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <Card variant="outlined" style={{ backgroundColor: 'white', marginBottom: '1rem' }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', '&:last-child': { paddingBottom: '12px' }  }}>
          <Typography variant="h3">Product List</Typography>
          <Toolbar style={{ padding: '0' }}>
            <Tooltip title="Copy">
              <IconButton style={{ padding: '0 8px' }}>
                <FileCopy />
              </IconButton>
            </Tooltip>
            <Tooltip title="Print">
              <IconButton style={{ padding: '0 8px' }}>
                <Print />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter">
              <IconButton style={{ padding: '0 8px' }}>
                <FilterList />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add">
              <IconButton style={{ padding: '0 8px' }}>
                <AddCircleIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </CardContent>
      </Card>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  indeterminate={selectedRows.length > 0 && selectedRows.length < data.length}
                  checked={selectedRows.length === data.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              <TableCell sortDirection={sortBy === 'id' ? sortOrder : false}>
                <TableSortLabel active={sortBy === 'id'} direction={sortBy === 'id' ? sortOrder : 'asc'} onClick={() => handleSort('id')}>
                  ID
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={sortBy === 'title' ? sortOrder : false}>
                <TableSortLabel
                  active={sortBy === 'title'}
                  direction={sortBy === 'title' ? sortOrder : 'asc'}
                  onClick={() => handleSort('title')}
                >
                  Title
                </TableSortLabel>
              </TableCell>
              <TableCell>Subtitle</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>New Price</TableCell>
              <TableCell>Old Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row) => (
              <TableRow key={row.id} selected={isSelected(row.id)} hover onClick={() => handleSelectRow(row.id)}>
                <TableCell>
                  <Checkbox checked={isSelected(row.id)} />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.subTitle}</TableCell>
                <TableCell>{row.rating}</TableCell>
                <TableCell>{row.newPrice}</TableCell>
                <TableCell>{row.oldPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="td"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                className={classes.tableFooter}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}

export default ProductTable;
