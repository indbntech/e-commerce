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
import BillingInformation from './BillingInformation';
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Box } from '@mui/system';

const Checkout = () => {
  const [currentTab, setCurrentTab] = useState(0);
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
    return <BillingInformation />;
  };

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const onBackClick = () => {
    // Your logic for handling the back button click goes here
    console.log('Back button clicked');
  };

  const onPlaceOrderClick = () => {
    // Your logic for handling the back button click goes here
    console.log('Place order button clicked');
  };

  // Sample billing info data
  const billingInfoData = [
    {
      name: 'Martin Shaw',
      address: '1654 Zideh Plz, 27 Elabe Trailllllll, Suwecpimmmmmm, Kentucky, kGambia - HS6N 5ATkkk',
      addressType: 'Office',
      phone: '1234567890'
    },
    {
      name: 'Billy Castillo',
      address: '1359 Pusuw Park, 1057 Geptoc Key, Pazworog, Kentucky, Bahrain - FK6T 8HK',
      addressType: 'Home',
      phone: '0987654321'
    },
    {
      name: 'Brenda Murphy',
      address: '1654 Zideh Plz, 125 Test Rd, Knoxville, Knoxville, United States - 778',
      addressType: 'Office',
      phone: '1357924680'
    }
  ];

  const customerDetails = {
    name: 'Delia Pope',
    email: 'deliaturewpo@company.com',
    contactNumber: '9804732942',
    numberOfOrders: 19
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
            <Grid>
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
            </Grid>
          )}

          {currentTab === 1 && (
            // this is upar wala card jisko billing card bnana h
            <Grid sx={{ display: 'flex' }}>
              <Grid container spacing={2} sx={{ display: 'flex', flexBasis: '66%' }}>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Billing Address
                  </Typography>
                  <Button style={{ backgroundColor: '#2196f3', color: 'white' }} startIcon={<AddIcon />}>
                    Add Address
                  </Button>
                </Grid>
                <Grid>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
                    {billingInfoData.map((info, index) => (
                      <Card key={index} style={{ width: '46%', marginBottom: 20, border: '1px solid #ddd', margin: '24px 0 0 24px' }}>
                        <CardContent>
                          <div style={{ display: 'flex', gap: '5px' }}>
                            <Typography variant="h5" component="h2">
                              {info.name}
                            </Typography>
                            <Typography variant="caption" component="h2">
                              ({info.addressType})
                            </Typography>
                          </div>
                          <Typography variant="body1" component="p" sx={{ marginTop: '16px' }}>
                            {info.address}
                          </Typography>
                          <Typography variant="caption" component="p">
                            {info.phone}
                          </Typography>
                          <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button
                              variant="contained"
                              style={{
                                marginTop: 10,
                                color: '#2196f3',
                                backgroundColor: 'white',
                                border: '2px solid #2196f380',
                                borderRadius: '5px',
                                boxShadow: 'none',
                                '&:hover': {
                                  backgroundColor: 'blue',
                                  color: 'white'
                                }
                              }}
                            >
                              Deliver to this address
                            </Button>

                            <Grid>
                              <IconButton aria-label="edit">
                                <EditIcon />
                              </IconButton>
                              <IconButton aria-label="delete">
                                <DeleteIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </Grid>
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

                <Card style={{ maxWidth: 400, margin: 'auto' }}>
                  <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Back Arrow Icon */}
                    <IconButton onClick={onBackClick} aria-label="back">
                      <ArrowBackIcon />
                    </IconButton>
                    {/* Spacer */}
                    <Box flexGrow={1} />
                    {/* Place Order Button */}
                    <Button variant="contained" color="primary" onClick={onPlaceOrderClick}>
                      Place Order
                    </Button>
                  </Card>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: 'white',
                  flex: 1,
                  margin: '0 20px',
                  border: '1px solid #e3e8ef',
                  borderRadius: '8px',
                  height: 'fit-content'
                }}
              >
                <Card sx={{ margin: '20px', display: 'flex', flexDirection: 'column', height: 'fit-content' }}>
                  <Typography variant="h3" component="h2" gutterBottom style={{ display: 'flex', alignItems: 'center' }}>
                    <PermIdentityIcon />
                    <b>{customerDetails.name}</b>
                  </Typography>
                  <div style={{ marginTop: '10px' }}>
                    <div style={{ paddingTop: '16px' }}>
                      <Typography variant="caption" component="p" style={{ marginBottom: '5px' }}>
                        Email
                      </Typography>
                      <Typography variant="body1" component="p" style={{ marginBottom: '5px' }}>
                        <b> {customerDetails.email}</b>
                      </Typography>
                    </div>
                    <div style={{ paddingTop: '16px' }}>
                      <Typography variant="caption" component="p" style={{ marginBottom: '5px' }}>
                        Contact Number
                      </Typography>
                      <Typography variant="body1" component="p" style={{ marginBottom: '5px' }}>
                        {/* <b> {customerDetails.contactNumber}</b> */}
                        <b>{customerDetails.contactNumber.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3')}</b>
                      </Typography>
                    </div>

                    <div style={{ paddingTop: '16px' }}>
                      <Typography variant="caption" component="p" style={{ marginBottom: '5px' }}>
                        Number of Orders
                      </Typography>
                      <Typography variant="body1" component="p" style={{ marginBottom: '5px' }}>
                        <b> {customerDetails.numberOfOrders}</b>
                      </Typography>
                    </div>
                  </div>
                </Card>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
