import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import one from '../../views/ecommerce/image/one.png';
import { Link } from 'react-router-dom';

const categories = [
  { label: 'Law', imageSrc: one },
  { label: 'Business', imageSrc: one },
  { label: 'Medical', imageSrc: one },
  { label: 'Science', imageSrc: one },
];

const ProductDetails = () => {
  return (
    <Grid container spacing={2}>
      {categories.map((category, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <Link to={`/category/${category.label}`}>
            <Card className="MuiCard-root">
              <CardMedia component="img" height="140" image={category.imageSrc} alt={category.label} />
              <CardContent>
                <Typography variant="subtitle1">{category.label}</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductDetails;
