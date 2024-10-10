import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Call login function from context to set the user
        login(data.user);
        // Redirect to dashboard or home after successful login
        window.location.href = '/dashboard';
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Login failed');
    }
  };

  return (
    <div className="container mx-auto p-6 pt-24">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:border-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 w-full rounded-lg hover:bg-green-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login