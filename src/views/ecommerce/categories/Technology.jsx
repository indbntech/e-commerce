import * as React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  // Radio,
  // RadioGroup,
  // FormControlLabel,
  // FormGroup,
  // Checkbox,
  // AccordionDetails,
  // Accordion,
  // AccordionSummary
} from '@mui/material';
import { Rating } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import productArray from '../ProductArray.json';

export default function Technology() {
  // const [rating, setRating] = React.useState(0);

  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  // };

  // const colors = [
  //   '#90CAF9', // Red
  //   '#1E88E5', // Green
  //   '#B39DDB', // Blue
  //   '#673AB7', // Yellow
  //   '#B9F6CA', // Magenta
  //   '#00E676', // Cyan
  //   '#00C853', // Orange
  //   '#EF9A9A', // Purple
  //   '#F44336', // Lime
  //   '#C62828', // Navy
  //   '#FFE57F', // Maroon
  //   '#FFC107', // Olive
  //   '#FFAB91', // Teal
  //   '#D84315', // Grey
  //   '#BDC8F0', // Silver
  //   '#29314F' // Gold
  // ];

  return (
    <React.Fragment>
      <Card variant="outlined" style={{ backgroundColor: 'white', marginBottom: '1rem' }}>
        <CardContent>
          <Typography variant="h3">Technology</Typography>
        </CardContent>
      </Card>
      <Grid container spacing={3}>
        {/* Products */}
        <Grid item xs={12} md={12}>
          <Card variant="outlined">
            <CardContent>
              {/* <Typography variant="h5" gutterBottom>
                Products
              </Typography> */}
              <Grid container spacing={2}>
                {productArray.map((product, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                    <Card>
                      <img
                        src="https://delhibookstore.com/wp-content/uploads/2023/07/9789386648631-scaled.jpg"
                        // src= {img}
                        alt=""
                        style={{
                          display: 'block',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center center',
                          height: '220px'
                        }}
                      />
                      <CardContent style={{ padding: '16px' }}>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '14px' }}>
                          {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.subTitle}
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Rating name="size-small" value="4" size="small" />
                          <Typography variant="body2" color="text.secondary" style={{ marginLeft: '5px' }}>
                            {product.rating}
                          </Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                          <Typography variant="body2" color="text.secondary" style={{ fontSize: '16px', fontWeight: '700' }}>
                            ${product.newPrice}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" style={{ textDecoration: 'line-through' }}>
                            ${product.oldPrice}
                          </Typography>
                        </div>
                        <Button href='/productDetails' target="blank" variant="contained" color="primary" style={{ marginTop: '8px', width: '100%' }}>
                          BUY
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}