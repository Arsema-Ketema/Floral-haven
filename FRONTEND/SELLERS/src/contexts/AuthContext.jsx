import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [seller, setSeller] = useState(null);

  const login = (sellerData) => {
    setSeller(sellerData);
    localStorage.setItem('seller', JSON.stringify(sellerData));
  };

  const logout = () => {
    setSeller(null);
    localStorage.removeItem('seller');
  };

  return (
    <AuthContext.Provider value={{ seller, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);