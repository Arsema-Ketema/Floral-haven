import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
  const { seller } = useAuth();

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: 5, 
        color: '#fff', 
        background: 'linear-gradient(135deg, #1B3A2A 30%, #1F4D3B 100%)', // New gradient background (dark green)
        borderRadius: 2, 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', 
      }}
    >
      {/* Welcome Message */}
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 3, 
          fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' }, 
          color: '#FFB74D', // New vibrant gold color
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', 
        }}
      >
        Welcome, {seller?.name}
      </Typography>

      {/* Dashboard Options */}
      <Grid container spacing={3} justifyContent="center">
        {/* Manage Products */}
        <Grid item xs={12} sm={6} md={4}>
          <Card 
            sx={{ 
              bgcolor: '#1F4D3B', // New dark green background for cards
              borderRadius: 2, 
              transition: '0.3s ease', 
              '&:hover': { 
                transform: 'scale(1.05)', 
                bgcolor: '#2A6B4D', // Lighter green on hover
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.7)', 
              } 
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#FFB74D', mb: 2, fontWeight: 'bold' }}>Manage Products</Typography>
              <Link to="/manage-products" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#FFB74D', 
                    color: '#000', 
                    fontWeight: 'bold', 
                    borderRadius: '4px',
                    '&:hover': { 
                      bgcolor: '#FFA726', // Darker gold on hover
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' 
                    } 
                  }}
                >
                  Go to Products
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* View Messages */}
        <Grid item xs={12} sm={6} md={4}>
          <Card 
            sx={{ 
              bgcolor: '#1F4D3B', 
              borderRadius: 2, 
              transition: '0.3s ease', 
              '&:hover': { 
                transform: 'scale(1.05)', 
                bgcolor: '#2A6B4D', 
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.7)', 
              } 
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#FFB74D', mb: 2, fontWeight: 'bold' }}>View Messages</Typography>
              <Link to="/messages" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#FFB74D', 
                    color: '#000', 
                    fontWeight: 'bold', 
                    borderRadius: '4px',
                    '&:hover': { 
                      bgcolor: '#FFA726', 
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' 
                    } 
                  }}
                >
                  Open Inbox
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* View Orders */}
        <Grid item xs={12} sm={6} md={4}>
          <Card 
            sx={{ 
              bgcolor: '#1F4D3B', 
              borderRadius: 2, 
              transition: '0.3s ease', 
              '&:hover': { 
                transform: 'scale(1.05)', 
                bgcolor: '#2A6B4D', 
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.7)', 
              } 
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#FFB74D', mb: 2, fontWeight: 'bold' }}>View Orders</Typography>
              <Link to="/orders" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#FFB74D', 
                    color: '#000', 
                    fontWeight: 'bold', 
                    borderRadius: '4px',
                    '&:hover': { 
                      bgcolor: '#FFA726', 
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' 
                    } 
                  }}
                >
                  View Orders
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default SellerDashboard;