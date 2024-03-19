import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const mockMenuItems = [
  { id: 1, title: 'Product 1', link: '/product-1' },
  { id: 2, title: 'Product 2', link: '/product-2' },
  { id: 3, title: 'Product 3', link: '/product-3' },
  { id: 4, title: 'Product 4', link: '/product-4' },
  { id: 5, title: 'Product 5', link: '/product-5' },
  { id: 6, title: 'Product 6', link: '/product-6' },
  { id: 7, title: 'Product 7', link: '/product-7' },
  { id: 8, title: 'Product 8', link: '/product-8' },
  { id: 9, title: 'Product 9', link: '/product-9' },
  { id: 10, title: 'Product 10', link: '/product-10' },
  // Add more items here
];

const MegaMenu = ({ isOpen }) => {
  return (
    <Box sx={{ display: isOpen ? 'block' : 'none', position: 'absolute', top: 0, left: '100%', zIndex: 999 }}>
      <Paper elevation={3} sx={{ minWidth: '300px' }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Mega Menu
        </Typography>
        <List>
          {mockMenuItems.map((item) => (
            <ListItem button key={item.id} component="a" href={item.link}>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

MegaMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MegaMenu;
