import * as React from 'react';
// import Slider from '@mui/material/Slider';
// import IconButton from '@mui/material/IconButton';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import one from '../../assets/images/one.png';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';

const ImageSlider = () => {
//   const [value, setValue] = React.useState(0);

//   const handleSliderChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handlePrevious = () => {
//     // Handle previous button click
//   };

  const handleNext = () => {
    // Handle next button click
  };

  return (
    <Button size="small" onClick={handleNext}>
  <img src={one} alt="Next" /> {/* Use your image here */}
  {theme.direction === 'rtl' ? (
    <KeyboardArrowLeft />
  ) : (
    <KeyboardArrowRight />
  )}
</Button>
  );
};

export default ImageSlider;
