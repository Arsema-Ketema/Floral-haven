import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext'; // Import the CartProvider
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';
import ProductDetails from './pages/ProductDetails'; // Import the ProductDetails page
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'; // Import the Footer component
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
          <Router>
            <Navbar /> {/* No need to pass login state */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
            <Footer /> {/* Add the Footer here to render on all pages */}
          </Router>
          {/* Add ToastContainer to show toast notifications */}
          <ToastContainer position="bottom-left" autoClose={3000} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;