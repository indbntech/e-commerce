import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import productsData from '../Header/JSONS/products'; // Import products data

const MegaMenu = ({ isOpen, menuItem }) => {
  return (
    <>
      {isOpen && (
        <Paper sx={{ position: 'absolute', top: '100%', left: 0, zIndex: 10 }}>
          <Box p={2}>
            <Typography variant="subtitle1" gutterBottom>
              {menuItem.title} Products
            </Typography>
            <List component="nav">
              {productsData.map((product) => (
                <ListItem button key={product.id} component="a" href={product.link}>
                  <ListItemText primary={product.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      )}
    </>
  );
};

MegaMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  menuItem: PropTypes.object.isRequired
};

export default MegaMenu;
