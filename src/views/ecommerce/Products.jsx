import * as React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormGroup,
  Checkbox,
  AccordionDetails,
  Accordion,
  AccordionSummary
} from '@mui/material';
import { Rating } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import productArray from './ProductArray.json';

export default function Products() {
  const [rating, setRating] = React.useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const colors = [
    '#90CAF9', // Red
    '#1E88E5', // Green
    '#B39DDB', // Blue
    '#673AB7', // Yellow
    '#B9F6CA', // Magenta
    '#00E676', // Cyan
    '#00C853', // Orange
    '#EF9A9A', // Purple
    '#F44336', // Lime
    '#C62828', // Navy
    '#FFE57F', // Maroon
    '#FFC107', // Olive
    '#FFAB91', // Teal
    '#D84315', // Grey
    '#BDC8F0', // Silver
    '#29314F' // Gold
  ];

  return (
    <React.Fragment>
       <Card variant="outlined" style={{ backgroundColor: 'white', marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h3">Products</Typography>
      </CardContent>
    </Card>
      <Grid container spacing={3}>
        {/* Products */}
        <Grid item xs={12} md={8}>
          <Card variant="outlined">
            <CardContent>
              {/* <Typography variant="h5" gutterBottom>
                Products
              </Typography> */}
              <Grid container spacing={2}>
                {productArray.map((product, index) => (
                  <Grid item xs={6} sm={3} key={index}>
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
                        <Button variant="contained" color="primary" style={{ marginTop: '8px', width: '100%' }}>
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

        {/* Filter */}
        <Grid item xs={12} md={4}>
          <div>
            <Accordion expanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>Gender</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup row>
                  <FormControlLabel control={<Checkbox />} label="Male" />
                  <FormControlLabel control={<Checkbox />} label="Female" />
                  <FormControlLabel control={<Checkbox />} label="Kids" />
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                <Typography>Price</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <RadioGroup aria-label="Price" name="price" style={{ flexDirection: 'column' }}>
                      <FormControlLabel value="All" control={<Radio />} label="All" />
                      <FormControlLabel value="Electronics" control={<Radio />} label="Electronics" />
                      <FormControlLabel value="Fashion" control={<Radio />} label="Fashion" />
                    </RadioGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <RadioGroup aria-label="Price" name="price" style={{ flexDirection: 'column' }}>
                      <FormControlLabel value="Kitchen" control={<Radio />} label="Kitchen" />
                      <FormControlLabel value="Books" control={<Radio />} label="Books" />
                      <FormControlLabel value="Toys" control={<Radio />} label="Toys" />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                <Typography>Colors</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {colors.map((color, index) => (
                    <div key={index} style={{ width: 'calc(100% / 7)' }}>
                      <button
                        aria-label={`Color ${index}`}
                        style={{
                          backgroundColor: color,
                          border:'none',
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px',
                          // margin: '5px',
                          padding: '8px 0 0 8px'
                        }}
                      ></button>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                <Typography>Price</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <RadioGroup aria-label="Price" name="price" style={{ flexDirection: 'column' }}>
                      <FormControlLabel value="0-10" control={<Radio />} label="Below $10" />
                      <FormControlLabel value="100-150" control={<Radio />} label="$100 - $150" />
                      <FormControlLabel value="150-200" control={<Radio />} label="$150 - $200" />
                    </RadioGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <RadioGroup aria-label="Price" name="price" style={{ flexDirection: 'column' }}>
                      <FormControlLabel value="10-50" control={<Radio />} label="$10 - $50" />
                      <FormControlLabel value="50-100" control={<Radio />} label="$50 - $100" />
                      <FormControlLabel value="200-99999" control={<Radio />} label="Over $200" />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                <Typography>Rating</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {[...Array(5)].map((_, index) => (
                    <React.Fragment key={index}>
                      {index < rating ? (
                        <StarIcon
                          style={{ color: 'yellow', marginRight: '2px', cursor: 'pointer' }}
                          onClick={() => handleRatingChange(index + 1)}
                        />
                      ) : (
                        <StarBorderIcon
                          style={{ color: 'grey', marginRight: '2px', cursor: 'pointer' }}
                          onClick={() => handleRatingChange(index + 1)}
                        />
                      )}
                    </React.Fragment>
                  ))}
                  ({rating})
                </div>
              </AccordionDetails>
            </Accordion>

            <Button variant="contained" color="primary" fullWidth>
              Clear All
            </Button>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
