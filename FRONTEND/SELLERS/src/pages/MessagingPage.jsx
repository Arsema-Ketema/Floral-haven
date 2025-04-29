import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, TextField, Box } from '@mui/material';

const MessagingPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, content: 'I have a question about my order.', buyer: 'Buyer 1', type: 'contact' },
    { id: 2, content: 'Can you provide more details about the product?', buyer: 'Buyer 2', type: 'contact' },
    { id: 3, content: 'When will my order be shipped?', buyer: 'Buyer 3', type: 'instant' },
  ]);
  
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [ws, setWs] = useState(null);

  // Establish WebSocket connection
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => console.log('Connected to WebSocket server');
    
    socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, { ...newMessage, type: 'instant' }]);
    };

    socket.onerror = (error) => console.error('WebSocket error:', error);
    socket.onclose = () => console.log('WebSocket connection closed');

    setWs(socket);

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const handleReply = (messageId) => {
    if (replyContent) {
      const newMessage = {
        sender: 'You',
        text: replyContent,
        timestamp: new Date().toISOString(),
        type: 'instant',
      };

      if (ws && ws.readyState === WebSocket.OPEN && messages.find(msg => msg.id === messageId).type === 'instant') {
        ws.send(JSON.stringify(newMessage));
      }

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setReplyContent('');
      setReplyingTo(null);
    }
  };

  return (
    <Box sx={{ bgcolor: '#1F4D3B', p: 4, color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold', color: '#FFB74D' }}>
        Inbox
      </Typography>

      <div style={{ maxHeight: '400px', overflowY: 'scroll', flexGrow: 1 }}>
        {messages.map((msg) => (
          <Card key={msg.id} variant="outlined" sx={{ margin: 2, bgcolor: '#333', borderColor: '#FFB74D' }}>
            <CardContent>
              <Typography variant="body1" sx={{ color: '#fff' }}>
                <strong>{msg.buyer}:</strong> {msg.content}
              </Typography>
              <Typography variant="body2" sx={{ color: '#FFB74D', fontStyle: 'italic' }}>
                {msg.type === 'instant' ? 'Instant message' : 'Contact Us message'}
              </Typography>
              <Button 
                variant="contained" 
                onClick={() => setReplyingTo(msg.id)} 
                sx={{
                  marginTop: 1,
                  bgcolor: '#FFB74D',
                  '&:hover': { bgcolor: '#D27D2C' },
                  color: '#222',
                }}
              >
                Reply
              </Button>
              {replyingTo === msg.id && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    label="Type your reply..."
                    variant="outlined"
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    fullWidth
                    sx={{ 
                      bgcolor: '#333', 
                      color: '#fff', 
                      '& .MuiInputLabel-root': { color: '#FFB74D' }, 
                      '& .MuiOutlinedInput-root': { 
                        '& fieldset': { borderColor: '#FFB74D' }, 
                        '&:hover fieldset': { borderColor: '#FFB74D' } 
                      } 
                    }}
                  />
                  <Button 
                    variant="contained" 
                    onClick={() => handleReply(msg.id)} 
                    sx={{
                      marginTop: 1,
                      bgcolor: '#FFB74D',
                      '&:hover': { bgcolor: '#D27D2C' },
                      color: '#222',
                    }}
                  >
                    Send Reply
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
};

export default MessagingPage;