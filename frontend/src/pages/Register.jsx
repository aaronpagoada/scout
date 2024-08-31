import React from "react";
import { useState } from 'react'

// two problems
// 1. submit doesnt POST but once that is set up, 99% sure everything 
// else is set up properly to pass userForm as post method
// 2. once the form shows up, it never seems to leave ... assuming this can
// be fixed with submit button -> press submit and it brings u to home page with user session

// NOTE HOW TO SET UP 'sign in with google'
function RegisterForm() {
  // user needs name, username, email, password, and confirm password
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [success, setSuccess] = useState(false); // successful registration
  const [error, setError] = useState(null);

  // change data in input -> set target values
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ensure confirm password
    if (userData.password !== userData.confirmPassword) {
      setError('ERROR - passwords dont match');
      return;
    }

    const response = await fetch('http://localhost:8000/register', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    // successful registration - set user data
    if (response.ok) {
      setUserData({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setError(null);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } else {
      setError(json.error);
    }
  };

  // FORM - using aarons design for now
  return (
    // center form in the middle of screen
    <div className="flex items-center justify-center min-h-screen "> 
    <div className='w-[550px] flex flex-col items-center bg-yellow-100 p-4 rounded-lg drop-shadow-md'>
      {success && <div id='success'>Registration successful!</div>}
      {error && <div id='error'>{error}</div>}
      <form className='w-5/6' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <br />
        <input
          className='w-full h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none'
          type='text'
          id='name'
          value={userData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='username'>Username</label>
        <br />
        <input
          className='w-full h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none'
          type='text'
          id='username'
          value={userData.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='email'>Email</label>
        <br />
        <input
          className='w-full h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none'
          type='email'
          id='email'
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <br />
        <input
          className='w-full h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none'
          type='password'
          id='password'
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <br />
        <input
          className='w-full h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none'
          type='password'
          id='confirmPassword'
          value={userData.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <div className='flex justify-center'>
          <button
            className='mt-4 w-32 rounded-md bg-[#026900] text-white hover:bg-black'
            type='submit'
          >
            Register
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default RegisterForm;