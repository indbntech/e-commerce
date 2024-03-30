import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReturnIcon from '@mui/icons-material/AssignmentReturnOutlined';
import DiscountIcon from '@mui/icons-material/LocalOfferOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Delivery = () => {
    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#a2cf6e', padding: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
                <Box className="service-cell" sx={{ backgroundColor: 'white', padding: 2, borderRadius: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocalShippingOutlinedIcon sx={{ fontSize: 48, color: '#2196f3' }} />
                        <Typography variant="h3" sx={{ ml: 2 }}>Free Delivery</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>Orders from all items</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box className="service-cell" sx={{ backgroundColor: 'white', padding: 2, borderRadius: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <ReturnIcon sx={{ fontSize: 48, color: '#f44336' }} />
                        <Typography variant="h3" sx={{ ml: 2 }}>Return & Refund</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>Money back guarantee</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box className="service-cell" sx={{ backgroundColor: 'white', padding: 2, borderRadius: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <DiscountIcon sx={{ fontSize: 48, color: '#4caf50' }} />
                        <Typography variant="h3" sx={{ ml: 2 }}>Member Discount</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>On order over $99</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box className="service-cell" sx={{ backgroundColor: 'white', padding: 2, borderRadius: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <SupportAgentOutlinedIcon sx={{ fontSize: 48, color: '#ff9800' }} />
                        <Typography variant="h3" sx={{ ml: 2 }}>Support 24/7</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>Contact us 24 hours a day</Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Delivery;
