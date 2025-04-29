import React, { useContext } from 'react';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { toast } from 'react-toastify';
import '../styles/Cart.css'; // Import CSS for layout fixes

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalCost } = useContext(CartContext);
  const navigate = useNavigate(); // Navigation hook

  const handleRemove = (id) => {
    removeFromCart(id);
    toast.info('Item removed from cart');
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      handleRemove(id);
    } else {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="cart-page-container">
      <Container className="cart-content" sx={{ paddingTop: '20px' }}>
        <Typography 
          variant="h4" 
          style={{ color: '#fff', fontWeight: 'bold' }} // White color to stand out
        >
          Your Cart
        </Typography>
        {cart.length === 0 ? (
          <Typography variant="h6">Your cart is empty</Typography>
        ) : (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.price} ETB</TableCell>
                      <TableCell>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          style={{ width: '60px' }}
                        />
                      </TableCell>
                      <TableCell>{(item.price * item.quantity).toFixed(2)} ETB</TableCell>
                      <TableCell>
                        <Button variant="outlined" color="secondary" onClick={() => handleRemove(item.id)}>
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
            <Typography variant="h5" style={{ marginTop: '20px', color: '#fff' }}>
              Total Cost: {totalCost.toFixed(2)} ETB
            </Typography>

            {/* Checkout Button */}
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ marginTop: '20px' }}
              onClick={() => navigate('/checkout')} // Navigate to Checkout Page
              disabled={cart.length === 0} // Disable button if cart is empty
            >
              Proceed to Checkout
            </Button>
          </>
        )}
      </Container>
    </div>
  );
}

export default Cart;
