import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Collapse, Typography, Box, Chip } from '@mui/material';
import ordersData from '../mockData/orders.json'; // Import mock order data

const getStatusColor = (status) => {
  switch (status) {
    case 'Processing': return 'warning';
    case 'Shipped': return 'success';
    case 'Pending': return 'error';
    default: return 'default';
  }
};

const ViewOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    // Simulating an API call
    setOrders(ordersData);
  }, []);

  const handleExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <Box sx={{ bgcolor: '#1F4D3B', p: 4, color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold', color: '#FFB74D' }}>
        Orders
      </Typography>

      <TableContainer component={Paper} sx={{ bgcolor: '#333', flexGrow: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#FFB74D', fontWeight: 'bold' }}>Order ID</TableCell>
              <TableCell sx={{ color: '#FFB74D', fontWeight: 'bold' }}>Buyer</TableCell>
              <TableCell sx={{ color: '#FFB74D', fontWeight: 'bold' }}>Phone</TableCell>
              <TableCell sx={{ color: '#FFB74D', fontWeight: 'bold' }}>Delivery Option</TableCell>
              <TableCell sx={{ color: '#FFB74D', fontWeight: 'bold' }}>Payment</TableCell>
              <TableCell sx={{ color: '#FFB74D', fontWeight: 'bold' }}>Total</TableCell>
              <TableCell sx={{ color: '#FFB74D', fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ color: '#FFB74D', fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <React.Fragment key={order.orderId}>
                <TableRow>
                  <TableCell sx={{ color: '#fff' }}>{order.orderId}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{order.buyerName}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{order.phoneNumber}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{order.deliveryOption}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{order.paymentMethod}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>${order.totalAmount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Chip label={order.status} color={getStatusColor(order.status)} />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: '#FFB74D',
                        '&:hover': { bgcolor: '#D27D2C' },
                        color: '#222',
                        fontSize: '12px',
                      }}
                      onClick={() => handleExpand(order.orderId)}
                    >
                      {expandedOrder === order.orderId ? 'Hide Details' : 'View Details'}
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={8} sx={{ bgcolor: '#444', color: '#fff' }}>
                    <Collapse in={expandedOrder === order.orderId} timeout="auto" unmountOnExit>
                      <Box sx={{ p: 2 }}>
                        <Typography variant="h6" sx={{ color: '#FFB74D' }}>Order Details</Typography>
                        <Typography variant="body1">Order Date: {new Date(order.orderDate).toLocaleDateString()}</Typography>
                        {order.deliveryOption === 'Home Delivery' && (
                          <Typography variant="body1">Address: {order.deliveryAddress}</Typography>
                        )}
                        <Typography variant="body1">Email: {order.email}</Typography>
                        <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold' }}>Products:</Typography>
                        <Table size="small" sx={{ mt: 1 }}>
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ color: '#FFB74D' }}>Product</TableCell>
                              <TableCell sx={{ color: '#FFB74D' }}>Quantity</TableCell>
                              <TableCell sx={{ color: '#FFB74D' }}>Price</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {order.products.map((product, index) => (
                              <TableRow key={index}>
                                <TableCell sx={{ color: '#fff' }}>{product.productName}</TableCell>
                                <TableCell sx={{ color: '#fff' }}>{product.quantity}</TableCell>
                                <TableCell sx={{ color: '#fff' }}>${product.price.toFixed(2)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ViewOrdersPage;