import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Radio,
  FormControlLabel,
  FormGroup,
  IconButton,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  InputAdornment
} from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import productArray from '../dashboard/ProductArray';

function PaymentOptionsPage() {
  return (
    <Grid>
      <Grid spacing={3} sx={{ display: 'flex', flexWrap: 'nowrap', width: '100%', gap: '20px' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexBasis: '75%', maxWidth: '75%', flexDirection: 'column' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: '24px' }}>
                Delivery Options
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card style={{ border: '1px solid  #e3e8ef' }}>
                    <CardContent>
                      <FormControlLabel
                        value="standard"
                        control={<Radio color="primary" />}
                        label={
                          <>
                            <Typography variant="h5" gutterBottom>
                              {' '}
                              Standard Delivery (Free)
                            </Typography>
                            <Typography variant="caption">Delivered on Monday 8 Jun</Typography>
                          </>
                        }
                        labelPlacement="end"
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card style={{ border: '1px solid  #e3e8ef' }}>
                    <CardContent>
                      <FormControlLabel
                        value="fast"
                        control={<Radio color="primary" />}
                        label={
                          <>
                            <Typography variant="h5" gutterBottom>
                              Fast Delivery ($5.00)
                            </Typography>
                            <Typography variant="caption">Delivered on Monday 8 Jun</Typography>
                          </>
                        }
                        labelPlacement="end"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Grid sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <Typography variant="h5" sx={{ margin: '24px 0' }}>
                  Payment Options
                </Typography>
                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid sx={{ display: 'flex', flexDirection: 'column', flexBasis: '50%', gap: '20px' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Card sx={{ border: ' 1px solid #e3e8ef' }}>
                          <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <FormGroup style={{ flexGrow: 1 }}>
                              <FormControlLabel
                                value="paypal"
                                control={<Radio />} // This is the radio button
                                label={
                                  <div>
                                    <Typography variant="h5" gutterBottom>
                                      Pay with PayPal
                                    </Typography>
                                    <Typography variant="caption">
                                      You will be redirected to PayPal website to complete your purchase securely.
                                    </Typography>
                                  </div>
                                }
                              />
                            </FormGroup>
                            <PaidIcon /> {/* Assuming PaidIcon is the PayPal icon */}
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Card sx={{ border: ' 1px solid #e3e8ef' }}>
                        <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <FormGroup style={{ flexGrow: 1 }}>
                            <FormControlLabel
                              value="credit-card"
                              control={<Radio />} // This is the radio button
                              label={
                                <div>
                                  <Typography variant="h5" gutterBottom>
                                    Credit / Debit Card
                                  </Typography>
                                  <Typography variant="caption">We support Mastercard, Visa, Discover and Stripe.</Typography>
                                </div>
                              }
                            />
                          </FormGroup>
                          <CreditCardIcon /> {/* CreditCardIcon here */}
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card sx={{ border: ' 1px solid #e3e8ef' }}>
                        <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <FormGroup style={{ flexGrow: 1 }}>
                            <FormControlLabel
                              value="cod"
                              control={<Radio />} // This is the radio button
                              label={
                                <div>
                                  <Typography variant="h5" gutterBottom>
                                    Cash on Delivery
                                  </Typography>
                                  {/* Add cash on delivery payment content */}
                                  <Typography variant="caption">Pay with cash when your order is delivered. </Typography>
                                </div>
                              }
                            />
                          </FormGroup>
                          <LocalShippingIcon />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid sx={{ display: 'flex', flexDirection: 'column', flexBasis: '45%' }}>
                    <Grid container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                      <Grid item xs={12} md={4} lg={12}>
                        <TextField
                          variant="outlined"
                          placeholder="Add Your Card"
                          fullWidth
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Button variant="contained" color="primary" sx={{ padding: 0, paddingRight: '10px' }}>
                                  <IconButton color="inherit">
                                    <AddIcon />
                                  </IconButton>
                                  Add Card
                                </Button>
                              </InputAdornment>
                            )
                          }}
                        />
                      </Grid>
                    </Grid>

                    {/* Two card-like elements */}
                    <Grid container justifyContent="flex-end" sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                      <Grid item xs={12} md={6} lg={5.5}>
                        <Card sx={{ backgroundColor: '#81C784' }}>
                          <CardContent>
                            <Typography variant="h5">Card 1</Typography>
                            <CreditCardIcon sx={{ position: 'absolute', top: '8px', right: '8px' }} />
                            <Typography variant="subtitle1">**** **** **** 3456</Typography>
                            <Typography variant="subtitle1">12/24</Typography>
                            <Typography variant="subtitle1">JOHN DOE</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={6} lg={5.5}>
                        <Card sx={{ backgroundColor: '#81C784' }}>
                          <CardContent>
                            <Typography variant="h5">Card 2</Typography>
                            <CreditCardIcon sx={{ position: 'absolute', top: '8px', right: '8px' }} />
                            <Typography variant="subtitle1">**** **** **** 3456</Typography>
                            <Typography variant="subtitle1">12/24</Typography>
                            <Typography variant="subtitle1">JOHN DOE</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Grid spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item xs={6}>
              <Link href="#" style={{ textDecoration: 'none', display:'flex', gap:'6px', alignItems:'center' }}>
                <IconButton size="small" color="primary">
                  <ArrowBackIcon />
                </IconButton>
                <Typography color="primary" sx={{fontWeight: 500}}>Back</Typography>
              </Link>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" color="primary">
                Complete Order
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={3} sx={{ display: 'flex', flexDirection: 'column', flexBasis: '25%', maxWidth: '25%', margin: '0 auto' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Cart Items
              </Typography>
              <Grid container spacing={2}>
                {productArray.slice(0, 1).map((product) => (
                  <Grid item xs={8} key={product.id}>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '16px 0' }}>
                      <img src={product.image} alt={product.title} style={{ width: 50, height: 50, marginRight: 10 }} />
                    </div>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Grid item>
                        <Typography variant="subtitle1">{product.title}</Typography>
                        <Typography variant="caption" noWrap>
                          Size: 8 | Color: Light Primary
                        </Typography>
                      </Grid>
                      <Typography variant="body1">{`$${product.newPrice}`}</Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          <Card sx={{ border: '1px solid #e3e8ef' }}>
            <CardContent sx={{ p: 2 }}>
              <TableContainer sx={{ overflow: 'hidden' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell collSpan={2} sx={{ whiteSpace: 'nowrap', padding: '0 16px 8px ' }}>
                        Order Summary
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Subtotal</TableCell>
                      <TableCell align="right">$99.80</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Coupon Discount</TableCell>
                      <TableCell align="right">0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Shipping Charges</TableCell>
                      <TableCell align="right">0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <b>Total</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>$99.80</b>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>

          <Card style={{ width: '100%', marginBottom: 20, border: '1px solid #ddd', margin: '24px 0 0 0' }}>
            <CardContent>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Typography variant="h2" component="h2">
                  Shipping Address
                </Typography>
                <Button variant="contained" color="primary">
                  <EditIcon />
                  Change
                </Button>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Typography variant="h5" component="h2">
                  Martin Shaw
                </Typography>
                <Typography variant="caption" component="h2">
                  (Office)
                </Typography>
              </div>

              <Typography variant="body1" component="p" sx={{ marginTop: '16px' }}>
                1654 Zideh Plz, 27 Elabe Trailllllll, Suwecpimmmmmm, Kentucky, kGambia - HS6N 5ATkkk{' '}
              </Typography>
              <Typography variant="caption" component="p">
                (939) 513-8172{' '}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PaymentOptionsPage;
