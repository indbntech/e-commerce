import React, { useState } from 'react';
import { Typography, Card, CardContent, Tab, Tabs } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BillingInformation from './BillingInformation';
import UserProfile from './UserProfile';

const Checkout = () => {
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
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          variant="fullWidth"
          sx={{
            bgcolor: 'white',
            borderRadius: '12px',
            width: '60%',
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
          {currentTab === 0 && <UserProfile />}

          {currentTab === 1 && <BillingInformation />}
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
