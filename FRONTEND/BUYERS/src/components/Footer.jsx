import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Typography variant="body1">
          © {new Date().getFullYear()} Floral Haven. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link href="/AboutUs">About Us</Link> | 
          <Link href="/contact">Contact</Link> | 
          <Link href="/privacy">Privacy Policy</Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
