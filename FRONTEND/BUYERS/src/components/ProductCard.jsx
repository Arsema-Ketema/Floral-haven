// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/ProductCard.css'; // Import the external CSS file


function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`); // Correctly navigate to the product details page
  };

  return (
    // <Card>
    //   <img src={product.image} alt={product.name} style={{ width: '50%', height: 'auto' }} />
    //   <CardContent>
    //     <Typography variant="h5">{product.name}</Typography>
    //     <Typography variant="body2">${product.price}</Typography>
    //     <Button variant="contained" color="primary" onClick={handleViewDetails}>
    //       View Details
    //     </Button>
    //   </CardContent>
    // </Card>

    <Card style={{ height: '100%' }}>
  <img
    src={product.image}
    alt={product.name}
    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
  />
  <CardContent>
    <Typography variant="h6">{product.name}</Typography>
    <Typography variant="body2">${product.price}</Typography>
    <Button variant="contained" color="primary" onClick={handleViewDetails}>
      View Details
    </Button>
  </CardContent>
</Card>

  );
}

export default ProductCard;