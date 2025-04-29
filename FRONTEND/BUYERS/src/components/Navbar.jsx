import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, Toolbar, Button, Badge, IconButton, Drawer, List, ListItem, Typography, Box
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css';


function Navbar({ cartCount }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // Get current route

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Products", path: "/products" },
    { text: "About Us", path: "/about-us" },
    { text: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar className="nav-toolbar">
          {/* Hamburger Menu for Mobile */}
          <IconButton edge="start" className="menu-icon" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation */}
          <Box className="nav-links">
            {navLinks.map(({ text, path }) => (
              <Button 
                key={text} 
                component={Link} 
                to={path} 
                className="nav-button"
                sx={{ 
                  textDecoration: location.pathname === path ? 'underline' : 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                {text}
              </Button>
            ))}
          </Box>

          {/* Cart Icon */}
          <IconButton component={Link} to="/cart" className="cart-icon">
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer} className="drawer">
        <List>
          {navLinks.map(({ text, path }) => (
            <ListItem 
              button 
              key={text} 
              component={Link} 
              to={path} 
              onClick={toggleDrawer}
            >
              <Typography 
                sx={{ 
                  textDecoration: location.pathname === path ? 'underline' : 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
