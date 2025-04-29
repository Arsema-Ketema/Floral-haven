import React from "react";
import { Container, Typography, Grid, Card, CardContent, Avatar} from "@mui/material";
import { Favorite, LocalFlorist, LocalShipping, Forest } from "@mui/icons-material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/AboutUs.css";

const teamMembers = [
  { name: "Sophia", role: "Lead Florist", image: "/images/team1.jpg" },
  { name: "Ethan", role: "Delivery Manager", image: "/images/team2.jpg" },
  { name: "Lily", role: "Customer Relations", image: "/images/team3.jpg" },
];

const testimonials = [
  { name: "Emily R.", text: "The flowers were fresh and beautifully arranged. Absolutely loved them!", image: "/images/customer2.jpg" },
  { name: "James L.", text: "Fast delivery and excellent customer service. Will order again!", image: "/images/customer1.jpg" },
  { name: "Sophia W.", text: "Unique bouquets and eco-friendly packaging! Highly recommended!", image: "/images/customer2.jpg" },
];

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <motion.div className="hero-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Typography variant="h2" className="hero-title">Bringing Nature’s Beauty to Your Doorstep</Typography>
        <Typography variant="h5" className="hero-subtitle">Fresh flowers, handcrafted with love, delivered with care.</Typography>
      </motion.div>
      
      {/* Our Story */}
<Grid container spacing={4} className="story-section">
  <Grid item xs={12} md={6}>
    <img src="/images/shop.png" alt="Our Flower Shop" className="story-image" />
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h4" style={{ color: "#e0c097", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
      Our Story
    </Typography>
    <Typography variant="body1">
      Founded with love for nature and art, our flower shop began as a small family business. Over the years, we have grown into a cherished floral destination, spreading happiness with hand-picked, fresh blooms for every occasion. 
    </Typography>
    <Typography variant="body1" style={{ marginTop: "10px" }}>
      Our passion for flowers drives us to craft stunning arrangements that bring warmth and beauty into homes, celebrations, and heartfelt moments. We carefully source our flowers to ensure the freshest quality, and our dedicated team of florists curates unique designs that speak the language of love and joy.
    </Typography>
    <Typography variant="body1" style={{ marginTop: "10px" }}>
      Whether it's a romantic bouquet, a thoughtful gift, or elegant event décor, we take pride in creating floral experiences that leave lasting impressions. Join us on this blooming journey and let’s make every day a little more colorful!
    </Typography>
  </Grid>
</Grid>

      
      {/* What We Offer */}
      <Typography variant="h4" align="center" className="section-title">What We Offer</Typography>
      <Grid container spacing={3} justifyContent="center">
        {[{ icon: <LocalFlorist />, text: "Fresh Flowers" }, { icon: <LocalShipping />, text: "Fast Delivery" }, { icon: <Favorite />, text: "Custom Bouquets" }, { icon: <Forest />, text: "Eco-Friendly Packaging" }].map((item, index) => (
          <Grid item key={index} xs={6} sm={3} className="offer-item">
            {item.icon}
            <Typography>{item.text}</Typography>
          </Grid>
        ))}
      </Grid>
      
      {/* Meet the Team */}
      <Typography variant="h4" align="center" className="section-title">Meet the Team</Typography>
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Card className="team-card">
              <Avatar src={member.image} className="team-avatar" />
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2">{member.role}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Customer Testimonials */}
      <Typography variant="h4" align="center" className="section-title">What Our Customers Say</Typography>
      <Slider {...sliderSettings} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="testimonial-card">
            <CardContent>
              <Avatar src={testimonial.image} className="testimonial-avatar" />
              <Typography variant="h6">{testimonial.name}</Typography>
              <Typography variant="body1" className="testimonial-text">"{testimonial.text}"</Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
      
    
    </Container>
  );
};

export default AboutUs;
