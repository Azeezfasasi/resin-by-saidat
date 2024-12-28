import React, { createContext, useState, useEffect } from 'react';

// Create the User Context
export const UserContext = createContext();

// Create the User Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profileImage: '',
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
    role: '',
    // Add other user details as needed
});

  const loginUser = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      return true;
    } else {
      return false;
    }
  };

  // Function to handle user logout
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Function to handle user registration
  const registerUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Function to update user profile
  const updateUserProfile = (updatedData) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedData }));
    localStorage.setItem('user', JSON.stringify({ ...user, ...updatedData }));
  };

  // Load user data from local storage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, registerUser, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};