import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to login or home after successful registration
        window.location.href = '/login';
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <div className="container mx-auto p-6 pt-24">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleRegister} className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Username</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:border-green-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register