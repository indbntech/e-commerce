// BillingInfoPage.js
import React from 'react';
import { Card, CardContent, Typography, Button, IconButton, AppBar, Toolbar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const BillingInformation = () => {
  // Sample billing info data
  const billingInfoData = [
    {
      name: 'John Doe',
      address: '123 Main St, City, Country',
      phone: '+1234567890'
    },
    {
      name: 'Jane Smith',
      address: '456 Elm St, City, Country',
      phone: '+0987654321'
    },
    {
      name: 'Alex Johnson',
      address: '789 Oak St, City, Country',
      phone: '+1357924680'
    }
  ];

  const customerDetails = {
    name: 'John Doe',
    email: 'john@example.com',
    contactNumber: '+1234567890',
    numberOfOrders: 5 // Sample number of orders
  };

  return (
    <Card style={{ margin: '20px auto', maxWidth: 1000 }}>
      <CardContent style={{ display: 'flex' }}>
        {/* Billing Info Cards */}
        <Card style={{ flex: 2, border: '1px solid #ddd', display: 'flex', flexWrap: 'wrap' }}>
          <CardContent>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Billing
                </Typography>
                <Button style={{ backgroundColor: '#2196f3', color: 'white' }} startIcon={<AddIcon />}>
                  Add Address
                </Button>
              </Toolbar>
            </AppBar>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
              {billingInfoData.map((info, index) => (
                <Card key={index} style={{ width: '48%', marginBottom: 20, border: '1px solid #ddd' }}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Name: {info.name}
                    </Typography>
                    <Typography variant="body1" component="p">
                      Address: {info.address}
                    </Typography>
                    <Typography variant="body1" component="p">
                      Phone: {info.phone}
                    </Typography>
                    <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
                      Deliver to this address
                    </Button>
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Details Card */}
        <Card style={{ flex: 1, marginRight: 20, border: '1px solid #ddd' }}>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Customer Details
            </Typography>
            <Typography variant="body1" component="p">
              Name: {customerDetails.name}
            </Typography>
            <Typography variant="body1" component="p">
              Email: {customerDetails.email}
            </Typography>
            <Typography variant="body1" component="p">
              Contact Number: {customerDetails.contactNumber}
            </Typography>
            <Typography variant="body1" component="p">
              Number of Orders: {customerDetails.numberOfOrders}
            </Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default BillingInformation;
