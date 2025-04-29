import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Grid, Container, TextField, MenuItem, Select, InputLabel, FormControl, Typography } from '@mui/material';
import '../styles/Products.css'; // Import the external CSS file

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]); // State to store fetched products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/mockData.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || product.category === selectedCategory)
    )
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

  return (
    <Container className="products-container">
      <Typography variant="h4" className="products-title">
        Browse Our Products
      </Typography>

      <div className="filter-section">
        <TextField
          label="Search Products"
          variant="outlined"
          onChange={handleSearchChange}
          className="luxury-input"
        />

        <FormControl variant="outlined" className="luxury-select">
          <InputLabel>Sort By</InputLabel>
          <Select value={sortOrder} onChange={handleSortChange} label="Sort By">
            <MenuItem value="asc">Price: Low to High</MenuItem>
            <MenuItem value="desc">Price: High to Low</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className="luxury-select">
          <InputLabel>Category</InputLabel>
          <Select value={selectedCategory} onChange={handleCategoryChange} label="Category">
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Bouquets">Bouquets</MenuItem>
            <MenuItem value="Wedding Flowers">Wedding Flowers</MenuItem>
            <MenuItem value="Birthday Specials">Birthday Specials</MenuItem>
            <MenuItem value="Seasonal Flowers">Seasonal Flowers</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={2} key={product.id}>
            <ProductCard product={product} />
          </Grid>
          
        ))}

        
      </Grid> */}


<Grid container spacing={2}>
  {filteredProducts.map((product) => (
    <Grid item xs={12} md={6} key={product.id}>
      <ProductCard product={product} />
    </Grid>
  ))}
</Grid>


    </Container>
  );
}

export default Products;
