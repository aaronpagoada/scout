import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='w-full lg:flex flex-col items-center'>
      <Header />
      <div className='w-full flex flex-col justify-center items-center lg:max-w-md lg:w-1/3 lg:border lg:border-gray-300 lg:bg-gray-50'>
        <h3 className='text-black text-3xl mb-8 md:mt-8'>Sign up</h3>
        <form className='w-5/6 md:w-5/12 lg:w-5/6' action=''>
          <div className='mb-8 flex flex-col items-start'>
            <label className='text-gray-500 text-sm' htmlFor='username'>
              Username
            </label>
            <input
              className='transition duration-150 ease-linear w-full h-9 pl-2 pr-6 border border-gray-300 focus:outline-none focus:border-black text-black rounded hover:border-gray-400'
              id='username'
              type='text'
            />
          </div>
          <div className='mb-8 flex flex-col items-start'>
            <label className='text-gray-500 text-sm' htmlFor='email'>
              Email
            </label>
            <input
              className='transition duration-150 ease-linear w-full h-9 pl-2 pr-6 border border-gray-300 focus:outline-none focus:border-black text-black rounded hover:border-gray-400'
              id='email'
              type='email'
            />
          </div>
          <div className='mb-8 flex flex-col items-start'>
            <label className='text-gray-500 text-sm' htmlFor='password'>
              Password
            </label>
            <input
              className='transition duration-150 ease-linear w-full h-9 pl-2 pr-6 border border-gray-300 focus:outline-none focus:border-black text-black rounded hover:border-gray-400'
              id='password'
              type='password'
            />
          </div>
          <div>
            <button className='w-full'>Sign up</button>
          </div>
          <hr className='border-t-2 border-black w-full h-2 mt-8' />
        </form>
        <div className='w-5/6 flex justify-center text-black text-sm mt-8 lg:mb-8'>
          Already have an account?
          <Link className='ml-2' to='/login'>
            Log in
          </Link>
        </div>
      </div>
      <footer className='w-full fixed bottom-0 left-0 text-center mt-8 mb-8 text-gray-300'>
        © Scout 2024
      </footer>
    </div>
  );
}

export default RegisterPage;
