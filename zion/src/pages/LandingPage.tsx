import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      {/* Header */}
      <Header />
    </div>
  );
}

export default LandingPage;
