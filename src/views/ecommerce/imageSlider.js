import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Box } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const images = [
  'https://delhibookstore.com/wp-content/uploads/2023/12/banner-latest1-1.png',
  'https://delhibookstore.com/wp-content/uploads/2023/12/lkj.png',
  'https://delhibookstore.com/wp-content/uploads/2023/09/banner-121.png',
  
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const goToIndex = (newIndex) => {
    setIndex(newIndex);
  };

  const goToPrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(goToNext, 3000); // Change image every 3 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoplay]);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`Images ${idx + 1}`}
            style={{
              display: idx === index ? 'block' : 'none',
              maxWidth: '100%',
              transition: 'opacity 0.5s ease',
              opacity: idx === index ? 1 : 0,
            }}
          />
        ))}
      </Box>
      <Box sx={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <Typography variant="h4">Image Carousel</Typography>
        <Grid container justifyContent="center" spacing={2} mt={2}>
          <Grid item>
            <Button onClick={goToPrev} startIcon={<ArrowBackIosNew />} variant="outlined" sx={{ color: 'primary.main' }}>
              Prev
            </Button>
          </Grid>
          {images.map((image, idx) => (
            <Grid item key={idx}>
              <Button onClick={() => goToIndex(idx)} sx={{ minWidth: 0, padding: 0 }}>
                <img
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  style={{ width: '50px', height: 'auto', borderRadius: '4px', cursor: 'pointer' }}
                />
              </Button>
            </Grid>
          ))}
          <Grid item>
            <Button onClick={goToNext} endIcon={<ArrowForwardIos />} variant="outlined" sx={{ color: 'primary.main' }}>
              Next
            </Button>
          </Grid>
        </Grid>
        <Button onClick={() => setAutoplay(!autoplay)} sx={{ mt: 2 }}>
          {autoplay ? 'Pause' : 'Play'}
        </Button>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
