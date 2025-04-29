import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import '../style/ProductList.css'; // Ensure you have the CSS file imported

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card variant="outlined" className="product-card">
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="h6">${product.price}</Typography>
                <Button variant="contained" color="secondary" style={{ marginRight: '10px' }}>
                  Edit
                </Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
