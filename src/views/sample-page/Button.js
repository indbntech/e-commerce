import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="contained" startIcon={<ShoppingCartOutlinedIcon />} sx={{font:'15px Roboto,sans-serif',width:230}}>
        Add To Cart
      </Button>
      <Button variant="contained" sx={{ backgroundColor: '#673AB7', color: 'white',font:'15px Roboto,sans-serif',width:230}}>
        Buy Now
      </Button>
    </Stack>
  );
}