import React from 'react';
import { Container, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4)
}));

const Media = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%' // 16:9
});

const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  backgroundColor: theme.palette.background.paper
}));

const ProductPage = () => {
   return (
    <RootContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          
          <Card>
            <Media image="https://via.placeholder.com/400x600" title="Product Image" />
            <CardContentWrapper>
              <Typography variant="h5" gutterBottom>
                Product Name
              </Typography>
              <Typography variant="body1" gutterBottom>
                Product Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mattis urna.
              </Typography>
              <Typography variant="h6" gutterBottom>
                $99.99
              </Typography>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContentWrapper>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', p: 3, borderRadius: 1 }}
          >
            Product Details
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', p: 3, borderRadius: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel magna sit amet ipsum convallis ultricies. Vivamus sit amet
            sem interdum, pulvinar magna in, efficitur ex. Integer tempus mauris non diam fermentum, sit amet ultricies libero scelerisque.
          </Typography>
        </Grid>
      </Grid>
    </RootContainer>
  );
};

export default ProductPage;
