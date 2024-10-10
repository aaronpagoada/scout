import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Initial state is null (no user logged in)
  const [loading, setLoading] = useState(true);

  // Simulate fetching user info from local storage or an API
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function (usually will fetch credentials from an API)
  function login(username, password) {
    // Simulate an API call and validate credentials
    const loggedInUser = { username }; // Mock user data
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser)); // Store in local storage
  };

  // Logout function
  function logout() {
    setUser(null);
    localStorage.removeItem('user'); // Clear local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
