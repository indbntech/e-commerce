import * as React from 'react';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Brightness1Icon from '@mui/icons-material/Brightness1';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Add from './Add';


const MyComponent = styled('div')({
  color: '#00C853',
  padding: 2,
  font: '13px Roboto,sans-serif',
});
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: '(+)',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function Text() {
  const value = 4;

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return <>
    <Box>
      <Box sx={{display:'flex'}}>
      <MyComponent>In Stock</MyComponent>
      </Box>
      <Box sx={{display:'flex'}}>
        <Typography variant='h3'>Apple Series 4 GPS A38 MM Space</Typography>
        <Stack sx={{ml:1}}>
        <Chip label="New" color="primary" variant="outlined" sx={{border:'2px solid',height:23}} />
        </Stack>
      </Box>
      <Box>
      <Typography variant="h4" font="14px Roboto,sans-serif" color='#364152' marginTop='8px'>Apple Watch SE Smartwatch</Typography>
      </Box>
      <Box>
      <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        mt: 1.5,
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
    <Box sx={{display:'flex',mt: 1.5}}>
    <Typography variant='h3'font="24px Roboto,sans-serif" color='#2196F3'>$275</Typography>
    <Typography variant='h5' font="14px Roboto,sans-serif" color='#364152' marginLeft='6px'>$</Typography>
    <Typography variant='h5' font="12px Roboto,sans-serif" color='#697586' marginLeft='6px'>(Inclusive of all taxes)</Typography>
    </Box>
    </Box>
    <hr/>
      <Box sx={{display:'flex',mt:3}}>
        <Typography variant='h5' font="14px Roboto,sans">Colors</Typography>
        <Typography variant='h5' font="12px Roboto,sans" color='red'>*</Typography>
        <Box sx={{ml: 6}}>
        <Brightness1Icon sx={{color:"darkred"}}/>
        <Brightness1Icon sx={{color:"red"}}/>
        <Brightness1Icon sx={{color:"#673AB7"}}/>
        </Box>
      </Box>
      <Box sx={{display:'flex',mt:3}}>
      <Box>
      <Box sx={{display:'flex'}}>
      <Typography variant='h5' font="14px Roboto,sans">Size</Typography>
        <Typography variant='h5' font="12px Roboto,sans" color='red'>*</Typography>
      </Box>
      <Typography variant='h5' font="14px Roboto,sans" color='primary' marginTop='-5px'>Size Chart?</Typography>
      </Box>
      <Box sx={{ minWidth: 80, ml: 3}}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">None</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          sx={{height:40}}
        >
          <MenuItem value={10}>None</MenuItem>
          <MenuItem value={20}>8</MenuItem>
          <MenuItem value={30}>10</MenuItem>
          <MenuItem value={40}>12</MenuItem>
          <MenuItem value={50}>14</MenuItem>
          <MenuItem value={60}>16</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </Box>
      <Box sx={{display:'flex',mt:5,mb:3}}>
      <Box><Typography variant='h5' font="14px Roboto,sans" paddingTop='5px'>Quantity</Typography></Box>
      <Box sx={{ml: 3}}><Add/></Box>
      </Box>
      <hr/>
      <Box></Box>
      <Box></Box>
    </Box>
  </>;
}