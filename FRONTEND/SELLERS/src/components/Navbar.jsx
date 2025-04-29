import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  const navLinks = (
    <>
      <Button 
        component={Link} 
        to="/dashboard" 
        sx={{
          color: '#FFB74D', // New vibrant gold color
          fontWeight: 'bold',
          fontSize: '1.1rem',
          borderBottom: isActive('/dashboard') ? '2px solid #FFB74D' : 'none',
          '&:hover': { color: '#fff' } 
        }}
      >
        Dashboard
      </Button>

      <Button 
        component={Link} 
        to="/manage-products" 
        sx={{
          color: '#FFB74D', 
          fontWeight: 'bold',
          fontSize: '1.1rem',
          borderBottom: isActive('/manage-products') ? '2px solid #FFB74D' : 'none',
          '&:hover': { color: '#fff' } 
        }}
      >
        Manage Products
      </Button>

      <Button 
        component={Link} 
        to="/messages" 
        sx={{
          color: '#FFB74D', 
          fontWeight: 'bold',
          fontSize: '1.1rem',
          borderBottom: isActive('/messages') ? '2px solid #FFB74D' : 'none',
          '&:hover': { color: '#fff' } 
        }}
      >
        Messages
      </Button>

      <Button 
        component={Link} 
        to="/orders" 
        sx={{
          color: '#FFB74D', 
          fontWeight: 'bold',
          fontSize: '1.1rem',
          borderBottom: isActive('/orders') ? '2px solid #FFB74D' : 'none',
          '&:hover': { color: '#fff' } 
        }}
      >
        Orders
      </Button>
    </>
  );

  const mobileNavLinks = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <ListItem 
          button 
          component={Link} 
          to="/dashboard" 
          sx={{
            backgroundColor: isActive('/dashboard') ? '#2A6B4D' : 'transparent', 
            color: isActive('/dashboard') ? '#FFB74D' : '#000',
            fontWeight: isActive('/dashboard') ? 'bold' : 'normal',
            borderLeft: isActive('/dashboard') ? '4px solid #FFB74D' : 'none'
          }}
        >
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem 
          button 
          component={Link} 
          to="/manage-products" 
          sx={{
            backgroundColor: isActive('/manage-products') ? '#2A6B4D' : 'transparent', 
            color: isActive('/manage-products') ? '#FFB74D' : '#000',
            fontWeight: isActive('/manage-products') ? 'bold' : 'normal',
            borderLeft: isActive('/manage-products') ? '4px solid #FFB74D' : 'none'
          }}
        >
          <ListItemText primary="Manage Products" />
        </ListItem>

        <ListItem 
          button 
          component={Link} 
          to="/messages" 
          sx={{
            backgroundColor: isActive('/messages') ? '#2A6B4D' : 'transparent', 
            color: isActive('/messages') ? '#FFB74D' : '#000',
            fontWeight: isActive('/messages') ? 'bold' : 'normal',
            borderLeft: isActive('/messages') ? '4px solid #FFB74D' : 'none'
          }}
        >
          <ListItemText primary="Messages" />
        </ListItem>

        <ListItem 
          button 
          component={Link} 
          to="/orders" 
          sx={{
            backgroundColor: isActive('/orders') ? '#2A6B4D' : 'transparent', 
            color: isActive('/orders') ? '#FFB74D' : '#000',
            fontWeight: isActive('/orders') ? 'bold' : 'normal',
            borderLeft: isActive('/orders') ? '4px solid #FFB74D' : 'none'
          }}
        >
          <ListItemText primary="Orders" />
        </ListItem>

        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(135deg, #1B3A2A, #1F4D3B)', // New gradient background
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '0.5rem 1rem'
      }}
    >
      <Toolbar>
        <Typography 
          variant="h5" 
          sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1, color: '#FFB74D', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' } }}
        >
          Floral Haven
        </Typography>

        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'block', sm: 'none' } }} onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          {isLoggedIn && navLinks}
          {isLoggedIn && (
            <Button onClick={handleLogout} sx={{ color: '#FFB74D', fontWeight: 'bold', fontSize: '1.1rem', '&:hover': { color: '#fff' } }}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {mobileNavLinks}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;