import React, { useState } from 'react';
import { TextField, Button, Container, Typography, CircularProgress } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../style/SellerLogin.css';

const SellerLogin = ({ onLogin }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    try {
      const mockSeller = { email: 'seller', name: 'Seller Name' };
      if (email === mockSeller.email && password === 'password') { // Simulate credential check
        login(mockSeller);
        onLogin();
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="seller-login-container">
      <Container className="seller-login-box">
        <Typography variant="h4" gutterBottom sx={{ color: '#FFB74D' }}>
          Floral Haven Admin Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            className="seller-input"
            InputLabelProps={{ style: { color: '#FFB74D' } }} // Gold color for label
            InputProps={{ style: { color: '#3D2C29' } }} // Dark text color for input
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            className="seller-input"
            InputLabelProps={{ style: { color: '#FFB74D' } }} // Gold color for label
            InputProps={{ style: { color: '#3D2C29' } }} // Dark text color for input
          />
          {error && <Typography className="seller-error">{error}</Typography>}
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            fullWidth
            className="seller-button"
            sx={{ marginTop: 2 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default SellerLogin;