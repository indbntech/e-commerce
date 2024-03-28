import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReturnIcon from '@mui/icons-material/AssignmentReturnOutlined';
import DiscountIcon from '@mui/icons-material/LocalOfferOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Delivery = () => {
    return (
        <Grid container spacing={2} sx={{ backgroundColor: 'white'}}>
            <Grid item xs={12} sm={6} md={3}>
                <Box className="service-cell" sx={{ display: 'flex', backgroundColor: '#f5f5f5', margin: '2px', padding:2 }}>
                    <Box>
                        <LocalShippingOutlinedIcon />
                    </Box>
                    <Box sx={{ marginLeft: 1 }}>
                        <Typography variant="h5">Free Delivery</Typography>
                        <Typography variant="body1">Orders from all items</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box className="service-cell" sx={{ display: 'flex', backgroundColor: '#f5f5f5', margin: '2px', padding:2 }}>
                    <Box>
                        <ReturnIcon />
                    </Box>
                    <Box sx={{ marginLeft: 1 }}>
                        <Typography variant="h5">Return & Refund</Typography>
                        <Typography variant="body1">Money back guarantee</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box className="service-cell" sx={{ display: 'flex', backgroundColor: '#f5f5f5', margin: '2px', padding:2 }}>
                    <Box>
                        <DiscountIcon />
                    </Box>
                    <Box sx={{ marginLeft: 1 }}>
                        <Typography variant="h5">Member Discount</Typography>
                        <Typography variant="body1">On order over $99</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box className="service-cell" sx={{ display: 'flex', backgroundColor: '#f5f5f5', margin: '2px', padding:2 }}>
                    <Box>
                        <SupportAgentOutlinedIcon />
                    </Box>
                    <Box sx={{ marginLeft: 1 }}>
                        <Typography variant="h5">Support 24/7</Typography>
                        <Typography variant="body1">Contact us 24 hours a day</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Delivery;
