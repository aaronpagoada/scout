import React from 'react';
import axios from "axios";
import scoutlogo from '../assets/IM-scout.svg';

function Header() {
  return (
    <header className='w-full h-12 flex justify-center mt-8 mb-8'>
      <img className='h-12' src={scoutlogo} />
    </header>
  );
}

export default Header;
