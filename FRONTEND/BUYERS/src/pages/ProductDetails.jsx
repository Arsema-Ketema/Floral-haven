import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Box, TextField } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'; // Importing CartContext
import { toast } from 'react-toastify'; // Importing toast for notifications

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Using CartContext
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Fetch product data from JSON file
    const fetchProductData = async () => {
      try {
        const response = await fetch('/mockData.json'); 
        const products = await response.json();
        const foundProduct = products.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  useEffect(() => {
    if (!product || !product.sellerId) return;

    const socket = new WebSocket(`ws://localhost:8080/${product.sellerId}`);

    socket.onopen = () => console.log('Connected to WebSocket');
    
    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prev) => [...prev, newMessage]);
    };

    socket.onerror = (error) => console.error('WebSocket error:', error);
    
    socket.onclose = () => console.log('WebSocket connection closed');

    setWs(socket);

    return () => {
      socket.close();
    };
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast.error('Please enter a message before sending.');
      return;
    }
    
    if (ws) {
      const newMessage = {
        sender: 'You',
        text: message,
        timestamp: new Date().toISOString(),
      };

      ws.send(JSON.stringify(newMessage));
      setMessages((prev) => [...prev, newMessage]);
      setMessage('');
      toast.success('Message sent to the seller!');
    } else {
      toast.error('Unable to connect to seller. Try again later.');
    }
  };

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Container sx={{ paddingTop: '20px', color: '#fff' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Box
          sx={{
            backgroundColor: '#222',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            color: '#fff',
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ color: '#e0c097' }}>
            {product.name}
          </Typography>
          <Typography variant="h4" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: '20px', backgroundColor: '#e0c097', color: '#111' }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          {/* Messaging Section */}
          <Box sx={{ marginTop: '30px' }}>
            <Typography variant="h5">Message the Seller</Typography>
            <Box
              sx={{
                border: '1px solid #444',
                padding: '10px',
                height: '200px',
                overflowY: 'auto',
                backgroundColor: '#333',
                borderRadius: '5px',
                marginBottom: '10px',
              }}
            >
              {messages.map((msg, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <strong style={{ color: msg.sender === 'You' ? '#E6B400' : '#bbb' }}>
                    {msg.sender}:
                  </strong>{' '}
                  {msg.text}
                </div>
              ))}
            </Box>
            <TextField
              label="Type a message"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                background: '#222',
                color: '#fff',
                borderRadius: '5px',
                '& .MuiInputBase-input': { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#e0c097' },
                  '&:hover fieldset': { borderColor: '#e0c097' },
                  '&.Mui-focused fieldset': { borderColor: '#e0c097' },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                marginTop: '10px',
                backgroundColor: '#e0c097',
                color: '#111',
                '&:hover': { backgroundColor: '#d4a200' },
              }}
              onClick={handleSendMessage}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ProductDetails;
