import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import one from '../../assets/images/one.png';
import { Box } from '@mui/system';

// const itemData = [
//   {
//     img: '',
//     title: '',
//   },
// ];

function Extra() {
  return (
    <Box>
      <img src={one} alt='me'/>
    </Box>
    // <ImageList sx={{ m:1,width: 387, height: 200 }}>
    //   {itemData.map((item) => (
    //     <ImageListItem key={item.img}>
    //       <img
    //         src={one}
    //         alt='me'
    //       />
    //     </ImageListItem>
    //   ))}
    // </ImageList>
  )
}

export default Extra