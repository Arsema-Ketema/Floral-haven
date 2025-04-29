import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        backgroundColor: '#1F4D3B', // Dark green background to match the theme
        color: '#FFB74D', // Gold color for text to match the luxurious theme
        py: 2, // Adds padding on the y-axis
        textAlign: 'center', 
        position: 'relative', 
        bottom: 0, 
        width: '100%',
        display: 'flex', // Ensure content is centered properly
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow to create separation from the content above
      }}
    >
      <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, fontWeight: 'bold' }}>
        © 2025 Floral Haven. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;