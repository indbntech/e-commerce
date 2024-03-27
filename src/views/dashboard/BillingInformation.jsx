import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom';

const BillingInformation = ({ changeTab }) => {
  const subtotal = 99.80;
  const couponDiscount = subtotal * 0;
  const shippingCharges = subtotal * 0;
  const total = subtotal + couponDiscount + shippingCharges;

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

  const handleButtonClick = () => {
    changeTab(2); 
  };

  return (
    <Grid sx={{ display: 'flex' }}>
      <Grid container spacing={2} sx={{ display: 'flex', flexBasis: '66%', margin: '0 auto' }}>
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
              <Card key={index} style={{ width: '46%', marginBottom: 20, border: '1px solid #ddd', margin: '24px 0' }}>
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

        <Grid sx={{ border: ' 1px solid #e3e8ef', borderRadius: '8px', width: '100%' }}>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell variant="h5" sx={{ fontWeight: '900' }}>
                    Order Summary
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Subtotal:</TableCell>
                  <TableCell align="right"><b>${subtotal.toFixed(2)}</b></TableCell>
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
                  <TableCell><b>Total:</b></TableCell>
                  <TableCell align="right"><b>${total.toFixed(2)}</b></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid container spacing={0} sx={{ mt: 4, display: 'flex', gap: '189px' }}>
          <Grid item xs={3}>
            <Link href="#" style={{ textDecoration: 'none', display: 'flex', gap: '6px', alignItems: 'center' }}>
              <IconButton size="small" color="primary">
                <ArrowBackIcon />
              </IconButton>
              <Typography color="primary" sx={{ fontWeight: 500 }}>
                Back
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" onClick={handleButtonClick()}>
              Place Order
            </Button>
          </Grid>
        </Grid>
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
          <Grid>
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
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BillingInformation;
