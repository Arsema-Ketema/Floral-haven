import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import SellerLogin from './pages/SellerLogin';
import SellerDashboard from './pages/SellerDashboard';
import ManageProducts from './pages/ManageProducts';
import MessagingPage from './pages/MessagingPage';
import ViewOrdersPage from './pages/ViewOrdersPage'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <div className="content">
            <Routes>
              <Route path="/" element={<SellerLogin onLogin={handleLogin} />} />
              <Route path="/dashboard" element={isLoggedIn ? <SellerDashboard /> : <Navigate to="/" />} />
              <Route path="/manage-products" element={isLoggedIn ? <ManageProducts /> : <Navigate to="/" />} />
              <Route path="/messages" element={isLoggedIn ? <MessagingPage /> : <Navigate to="/" />} />
              <Route path="/orders" element={isLoggedIn ? <ViewOrdersPage /> : <Navigate to="/" />} /> 
            </Routes>
          </div>
          {isLoggedIn && <Footer />}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
