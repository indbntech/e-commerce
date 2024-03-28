// SubCategory.js
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SubCategory = ({ coverImage, title, author, originalPrice, discountedPrice, websiteUrl }) => {
  return (
    <Card>
      {/* Wrap the image in an anchor tag */}
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <CardMedia component="img" alt={title} height="300" image={coverImage} />
      </a>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {author}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <del>{originalPrice}</del> {discountedPrice}
      </Typography>
    </Card>
  );
};

export default SubCategory;
