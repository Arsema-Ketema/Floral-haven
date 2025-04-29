import React, { useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography, Grid, Container } from '@mui/material';
import mockData from './mockData.json';
import { Link } from 'react-router-dom';
import '../styles/Home.css';


// Import images
import rosesImage from '../assets/images/redroses.png';
import tulipsImage from '../assets/images/tulips.jpg';
import sunflowersImage from '../assets/images/sunflowers.jpg';
import weddingFlowersImage from '../assets/images/wedding-flowers.jpeg';
import birthdaySpecialsImage from '../assets/images/birthday-specials.jpeg';
import seasonalFlowersImage from '../assets/images/seasonal-flowers.jpeg';
import BouquetsImage from '../assets/images/bouquets.jpeg';
import heroImage from '../assets/images/hero2.png';
import customer1 from '../assets/images/customer1.jpg';
import customer2 from '../assets/images/customer2.jpg';


function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter products dynamically based on searchTerm
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts([]); // Hide products if search is empty
    } else {
      setFilteredProducts(
        mockData.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]); // Runs whenever searchTerm changes


  const featuredProducts = [
    { id: 1, name: 'Red Roses', image: rosesImage },
    { id: 2, name: 'Tulips', image: tulipsImage },
    { id: 3, name: 'Sunflowers', image: sunflowersImage },
  ];

  const categories = [
    { id: 1, name: 'Bouquets', image: BouquetsImage },
    { id: 2, name: 'Wedding Flowers', image: weddingFlowersImage },
    { id: 3, name: 'Birthday Specials', image: birthdaySpecialsImage },
    { id: 4, name: 'Seasonal Flowers', image: seasonalFlowersImage },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="luxury-title">Floral Haven</h1>
        <p className="luxury-subtitle">Exquisite Blooms for Every Occasion</p>
        <div className="search-bar">
        <TextField
            label="Search Flowers"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="luxury-input"
          />
        </div>
      </div>

       {/* Search Results */}
       {filteredProducts.length > 0 && (
        <Container>
          <h2 className="luxury-heading">Search Results</h2>
          <Grid container spacing={3}>
            {filteredProducts.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card className="luxury-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <CardContent>
                    <Typography variant="h5" className="luxury-text">{product.name}</Typography>
                    {/* View Details Button */}
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/product/${product.id}`}
                      className="luxury-button"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}



      {/* Categories Section */}
      <Container>
        <h2 className="luxury-heading">Shop by Category</h2>
        <Grid container spacing={3}>
          {categories.map(category => (
            <Grid item xs={12} sm={6} md={3} key={category.id}>
              <Card className="luxury-card">
                <img src={category.image} alt={category.name} className="category-image" />
                <CardContent>
                  <Typography variant="h6" className="luxury-text">{category.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products */}
      <Container>
        <h2 className="luxury-heading">Featured Products</h2>
        <Grid container spacing={3}>
          {featuredProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card className="luxury-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <CardContent>
                  <Typography variant="h5" className="luxury-text">{product.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Us Section */}
<Container>
  <h2 className="luxury-heading">About Us</h2>
  <Card className="luxury-card about-card">
    <CardContent>
      <Typography variant="body1" className="luxury-text">
        At Floral Haven, we specialize in crafting elegant floral arrangements tailored for every occasion.
        Our flowers are sourced from the finest gardens, ensuring exceptional freshness and quality. 
        Experience luxury with every bloom.

        <br /><br />

        Floral Haven was founded with a vision to bring the beauty of nature into the hearts and homes of people everywhere. 
        Our journey began as a small family-run shop, but our passion for flowers quickly blossomed into a business that serves customers 
        across Addis Ababa and beyond. We believe that flowers are more than just decorations; they are expressions of love, celebration, 
        and emotion. Whether you're celebrating a wedding, anniversary, or simply brightening someone's day, we strive to create a 
        memorable experience with every bouquet.

        <br /><br />

        Our skilled florists carefully hand-pick each flower to ensure our customers receive only the freshest, most vibrant blooms. 
        From classic roses to exotic orchids, we offer a wide variety of flowers that cater to every taste and style. Whether you're 
        looking for a timeless bouquet or a custom arrangement for a special event, Floral Haven promises to deliver beauty and elegance 
        every time.

        <br /><br />

        We are committed to providing top-notch service, and we pride ourselves on our attention to detail, quick delivery, and 
        customer satisfaction. As we continue to grow, our mission remains the same: to make every occasion a little brighter, 
        a little more special, and filled with the timeless beauty of flowers.

        <br /><br />

        Thank you for choosing Floral Haven – where every flower tells a story.
      </Typography>
    </CardContent>
  </Card>
</Container>


      {/* Customer Testimonials */}
      <Container>
        <h2 className="luxury-heading">What Our Customers Say</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card className="luxury-card testimonial-card">
              <img src={customer1} alt="Customer 1" className="testimonial-image" />
              <CardContent>
                <Typography variant="body1" className="luxury-text">"Unparalleled quality! Absolutely stunning flowers." - Emily R.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="luxury-card testimonial-card">
              <img src={customer2} alt="Customer 2" className="testimonial-image" />
              <CardContent>
                <Typography variant="body1" className="luxury-text">"Exquisite arrangements and top-tier service!" - John D.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

     {/* Contact Us Section */}
<Container>
  <h2 className="luxury-heading">Contact Us</h2>
  
  <Card className="luxury-card contact-info-card">
    <CardContent>
      <Typography variant="h5" className="luxury-text">Get in Touch</Typography>
      <Typography variant="body1" className="luxury-text">
        📍 <strong>Address:</strong> 123 Bloom Street, Addis Ababa, Ethiopia
      </Typography>
      <Typography variant="body1" className="luxury-text">
        📞 <strong>Phone:</strong> +251-123-456-789
      </Typography>
      <Typography variant="body1" className="luxury-text">
        ✉️ <strong>Email:</strong> contact@floralhaven.com
      </Typography>
      
      {/* Social Media Links */}
      <div className="social-links">
        <Typography variant="body1" className="luxury-text">Follow us:</Typography>
        <a href="https://facebook.com/floralhaven" target="_blank" rel="noopener noreferrer" className="social-icon">🌐 Facebook</a>
        <a href="https://instagram.com/floralhaven" target="_blank" rel="noopener noreferrer" className="social-icon">📷 Instagram</a>
        <a href="https://twitter.com/floralhaven" target="_blank" rel="noopener noreferrer" className="social-icon">🐦 Twitter</a>
      </div>

      {/* Inquiry Form Link */}
      <Typography variant="body1" className="luxury-text" style={{ marginTop: "15px" }}>
        💬 Have a question? <Link href="/contact" className="luxury-link">Send us a message</Link>
      </Typography>
    </CardContent>
  </Card>
</Container>
    </div>
  );
}

export default Home;
