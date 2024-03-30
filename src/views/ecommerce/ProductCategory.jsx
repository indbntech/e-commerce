import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import l1 from './image/l1.jpg';
import bu1 from './image/bu1.jpg';
import me1 from './image/me1.jpg';
import sc1 from './image/sc1.jpg';
import comp1 from './image/comp1.jpg';
import ed1 from './image/ed1.jpg';
import ss1 from './image/ss1.jpg';
import ref1 from './image/Ref1.jpg';
import na1 from './image/Na1.jpg';
import art1 from './image/Art1.jpg';
import misc1 from './image/misc1.jpg';
import tech1 from './image/tech1.jpg';
import { Link } from 'react-router-dom';

const categories = [
  { label: 'Art', imageSrc: art1 },
  { label: 'Business', imageSrc: bu1 },
  { label: 'Computers', imageSrc: comp1 },
  { label: 'Education', imageSrc: ed1 },
  { label: 'Law', imageSrc: l1 },
  { label: 'Medical', imageSrc: me1 },
  { label: 'Misc', imageSrc: misc1 },
  { label: 'Nature', imageSrc: na1 },
  { label: 'Reference', imageSrc: ref1 },
  { label: 'Science', imageSrc: sc1 },
  { label: 'Social Science', imageSrc: ss1 },
  { label: 'Technology', imageSrc: tech1 },
];

const PorductCategory = () => {
  return (
    <Grid container spacing={2}>
      {categories.map((category, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <Link to={`/${category.label}`}>
            <Card className="MuiCard-root">
              <CardMedia component="img" height="140" image={category.imageSrc} alt={category.label} />
              <CardContent>
                <Typography variant="subtitle1" sx={{ textAlign: 'center'}}>{category.label}</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default PorductCategory;
