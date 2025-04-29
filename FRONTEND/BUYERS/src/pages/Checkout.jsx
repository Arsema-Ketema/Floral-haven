import React, { useContext, useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, Divider, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Checkout() {
  const { cart, totalCost } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'telebirr', // Default selection
    deliveryOption: 'delivery', // Default selection
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || (formData.deliveryOption === 'delivery' && !formData.address)) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Order placed successfully!');
    navigate('/'); // Redirect to home after placing order
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: '20px' }}>
      <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '20px' }}>
        Checkout
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6" sx={{ color: '#fff' }}>Your cart is empty</Typography>
      ) : (
        <Grid container spacing={3}>
          {/* Left Side - Order Summary */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '20px' }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: '#e0c097', fontWeight: 'bold' }}>Order Summary</Typography>
                {cart.map((item) => (
                  <div key={item.id} style={{ marginBottom: '10px' }}>
                    <Typography variant="subtitle1">{item.name} × {item.quantity}</Typography>
                    <Typography variant="subtitle2" sx={{ color: '#aaa' }}>{item.price} ETB each</Typography>
                  </div>
                ))}
                <Divider sx={{ backgroundColor: '#e0c097', marginY: 2 }} />
                <Typography variant="h6">Total: {totalCost.toFixed(2)} ETB</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side - User Information & Payment */}
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth 
                    label="Full Name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    InputLabelProps={{ style: { color: '#000' } }} 
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth 
                    type="email" 
                    label="Email Address" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    InputLabelProps={{ style: { color: '#000' } }} 
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth 
                    label="Phone Number" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    InputLabelProps={{ style: { color: '#000' } }} 
                    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                  />
                </Grid>

                {/* Delivery/Pickup Option */}
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: '#e0c097', fontWeight: 'bold' }}>Delivery Option</Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      name="deliveryOption"
                      value={formData.deliveryOption}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="delivery" control={<Radio />} label="Home Delivery" sx={{ color: '#fff' }} />
                      <FormControlLabel value="pickup" control={<Radio />} label="In-store Pickup" sx={{ color: '#fff' }} />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* Address Field (Only if Delivery is selected) */}
                {formData.deliveryOption === 'delivery' && (
                  <Grid item xs={12}>
                    <TextField 
                      fullWidth 
                      label="Delivery Address" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleChange} 
                      required 
                      InputLabelProps={{ style: { color: '#000' } }} 
                      sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                    />
                  </Grid>
                )}

                {/* Payment Options */}
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: '#e0c097', fontWeight: 'bold', marginBottom: '10px' }}>Payment Method</Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      row
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="telebirr" control={<Radio />} label="Telebirr" sx={{ color: '#fff' }} />
                      <FormControlLabel value="cbe-birr" control={<Radio />} label="CBE Birr" sx={{ color: '#fff' }} />
                      <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" sx={{ color: '#fff' }} />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>

              <Button 
                type="submit" 
                variant="contained" 
                fullWidth
                sx={{ marginTop: '20px', backgroundColor: '#e0c097', color: '#000', fontWeight: 'bold' }}
              >
                Place Order
              </Button>
            </form>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default Checkout;
