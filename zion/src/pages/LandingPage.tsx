import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LandingPage() {
  axios.get("/api/auth/test")

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      {/* Header */}
      <Header />
    </div>
  );
}

export default LandingPage;
