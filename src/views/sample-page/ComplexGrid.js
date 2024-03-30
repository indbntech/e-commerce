import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import one from '../ecommerce/image/1.jpg';
import Text from './Text';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from './Button';
import AboutUs from './AboutUs';
import { Box } from '@mui/system';
// import Abc from './Abc';

const Img = styled('img')({
  // margin: 'auto',
  // display: 'block',
  // maxWidth: '100%',
  // maxHeight: '100%',
});

const ComplexGrid = () => {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: '80%',
          height: '100%',
          flexGrow: 1,
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff')
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 387, height: 387 }}>
              <Img sx={{ width: 387, height: 387 }} alt="complex" src={one} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Text />
              </Grid>
              <Grid item>
                <Button />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                <FavoriteBorderIcon sx={{ backgroundColor: '#EEEEEE' }} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* <Typography sx={{ cursor: 'pointer' }} variant="body2">
          Add carousel
        </Typography> */}
        <Box>
          <AboutUs />
        </Box>
      </Paper>
    </>
  );
};
export default ComplexGrid;
