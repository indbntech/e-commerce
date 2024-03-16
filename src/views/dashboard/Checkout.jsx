import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  TextField,
  Button,
  Link,
  Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import productArray from '../dashboard/ProductArray';

const Checkout = () => {
  // Calculate payment summary
  // const subtotal = productArray.reduce((acc, item) => acc + item.newPrice * item.quantity, 0);
  const subtotal = 51.96;
  const couponDiscount = subtotal * 0;
  const shippingCharges = subtotal * 0;
  const total = subtotal + couponDiscount + shippingCharges;

  const handleDelete = (itemId) => {
    // Logic to remove item from cart goes here
    console.log(`Item with ID ${itemId} would be removed`);
  };

  const handleApplyCoupon = () => {
    // Logic to apply coupon code goes here
    console.log('Coupon code applied');
  };

  const handleCheckout = () => {
    // Logic for checkout goes here
    console.log('Proceed to checkout');
  };

  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <Card variant="outlined" style={{ backgroundColor: 'white', marginBottom: '1rem' }}>
        <CardContent>
          <Typography variant="h3">Checkout</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" style={{ backgroundColor: 'white', marginBottom: '1rem' }}>
        <CardContent>{/* <Typography variant="h5">Checkout</Typography> */}</CardContent>
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          variant="fullWidth"
          sx={{
            bgcolor: 'white',
            borderRadius: '12px',
            width: '60%', // Set the width of the tabs to 60%
            borderBottom: 'none'
          }}
        >
          <Tab
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ShoppingCartIcon style={{ marginRight: '10px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography>User Profile</Typography>
                  <Typography variant="caption">Product added</Typography>
                </div>
              </div>
            }
          />
          <Tab
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PersonIcon style={{ marginRight: '10px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography>Billing Info</Typography>
                  <Typography variant="caption">Billing Information</Typography>
                </div>
              </div>
            }
          />
          <Tab
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CreditCardIcon style={{ marginRight: '10px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography>Payment</Typography>
                  <Typography variant="caption">Add and Update Card</Typography>
                </div>
              </div>
            }
          />
        </Tabs>

        <CardContent>
          {currentTab === 0 && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">Cart Item ({productArray.slice(0, 2).length})</Typography>
                <TableContainer sx={{ padding: '24px 0 0' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ borderTop: '1px solid #e3e8ef', borderBottom: '1px solid #e3e8ef' }}>Product</TableCell>
                        <TableCell style={{ borderTop: '1px solid #e3e8ef', borderBottom: '1px solid #e3e8ef' }}>Price</TableCell>
                        <TableCell style={{ borderTop: '1px solid #e3e8ef', borderBottom: '1px solid #e3e8ef' }}>Quantity</TableCell>
                        <TableCell style={{ borderTop: '1px solid #e3e8ef', borderBottom: '1px solid #e3e8ef' }}>Total</TableCell>
                        <TableCell style={{ borderTop: '1px solid #e3e8ef', borderBottom: '1px solid #e3e8ef' }}>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {productArray.slice(0, 2).map((item) => (
                        <TableRow key={item.id}>
                          <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
                            <img src={item.image} alt={item.name} style={{ width: 50, height: 50, marginRight: 10 }} />
                            <div>
                              <Typography variant="body1" style={{ color: '#666', marginBottom: '0.5rem' }}>
                                {item.title}
                              </Typography>
                              <Typography variant="caption" style={{ color: '#697586', fontWeight: '500' }}>
                                Size:
                              </Typography>
                              <Typography variant="caption" style={{ color: '#697586' }}>
                                8
                              </Typography>
                              <Typography
                                variant="caption"
                                style={{ color: '#697586', margin: '0 5px', border: '1px solid #697586' }}
                              ></Typography>
                              <Typography variant="caption" style={{ color: '#697586', fontWeight: '500' }}>
                                Color:
                              </Typography>
                              <Typography variant="caption" style={{ color: '#697586' }}>
                                Light Primary
                              </Typography>
                            </div>
                          </div>
                          <TableCell>
                            <Typography variant="body1" style={{ color: '#666', marginBottom: '0.5rem' }}>
                              ${item.newPrice}
                            </Typography>
                            <Typography variant="caption" style={{ textDecoration: 'line-through' }}>
                              ${item.oldPrice}
                            </Typography>
                          </TableCell>

                          <TableCell>
                            {/* Placeholder for +/- buttons */}
                            <Paper
                              variant="outlined"
                              style={{ display: 'inline-block', border: '1px solid #e3e8ef', padding: '0.5rem', borderRadius: '0' }}
                            >
                              <IconButton size="small" style={{ padding: 0, paddingRight: '5px' }}>
                                -
                              </IconButton>
                              <Typography
                                style={{
                                  display: 'inline-block',
                                  borderLeft: '1px solid #e3e8ef',
                                  borderRight: '1px solid #e3e8ef',
                                  padding: '0.5rem'
                                }}
                              >
                                {(item.quantity = 2)}
                              </Typography>
                              <IconButton size="small" style={{ padding: 0, paddingLeft: '5px' }}>
                                +
                              </IconButton>
                            </Paper>
                          </TableCell>
                          <TableCell>${item.newPrice * item.quantity}</TableCell>
                          <TableCell>
                            {/* Placeholder for bin icon */}
                            <IconButton onClick={() => handleDelete(item.id)}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ backgroundColor: 'white', marginBottom: '1rem', border: '1px solid #e3e8ef', borderRadius: '8px' }}
              >
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell variant="h5" sx={{ fontWeight: '500' }}>
                          Order Summary
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Subtotal:</TableCell>
                        <TableCell align="right">${subtotal.toFixed(2)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Coupon Discount:</TableCell>
                        <TableCell align="right">${couponDiscount.toFixed(2)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Shipping Charges:</TableCell>
                        <TableCell align="right">${shippingCharges.toFixed(2)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Total:</TableCell>
                        <TableCell align="right">${total.toFixed(2)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          )}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <IconButton size="small">
                  <ArrowBackIcon />
                </IconButton>
                Continue Shopping
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column', marginLeft: '130px' }}>
                <Grid item xs={9} style={{ display: 'flex' }}>
                  <TextField label="Enter Coupon Code" variant="outlined" fullWidth />
                  <Button variant="contained" color="primary" onClick={handleApplyCoupon} style={{ marginLeft: '0.5rem' }}>
                    Apply
                  </Button>
                </Grid>
                <Grid item xs={9}>
                  <Button variant="contained" color="primary" onClick={handleCheckout} fullWidth>
                    Checkout
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
