import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import productsData from '../mockData/products.json'; // Import the mock data

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetch existing products from mock data
  useEffect(() => {
    setProducts(productsData);
  }, []);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, color: '#fff' }}>
      <Paper 
        elevation={6} 
        sx={{ 
          p: 4, 
          bgcolor: '#1F4D3B',  // Dark green background to match the theme
          borderRadius: 3, 
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)'  // Subtle shadow effect
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 3, 
            fontWeight: 'bold', 
            textAlign: 'center', 
            color: '#FFB74D'  // Gold for the header
          }}
        >
          Manage Your Products
        </Typography>

        <ProductForm addProduct={addProduct} />
        <ProductList products={products} />
      </Paper>
    </Container>
  );
};

export default ManageProducts;