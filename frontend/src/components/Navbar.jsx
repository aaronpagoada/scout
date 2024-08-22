import React from "react";
import { Link } from 'react-router-dom';
import logotext from "../logotext.svg";

function Navbar(){
  return(
    <div className="w-screen fixed top-0">
      <nav className="bg-yellow-50 h-20 pt-2 pb-2 pl-8 pr-8 flex justify-between">
        <Link className="flex items-center" to="/">
          <img src={logotext} className="h-14" alt="logo" />
        </Link>
        <ul className="flex items-center">
          <li className="font-crimson text-xl pr-3 inline">
            <Link to="/trips">
              Trips
            </Link>
          </li>
          <li className="font-crimson text-xl pl-3 pr-3 inline">
            <Link to="/trips/plan">
              Plan a Trip
            </Link>
          </li>
          <li className="font-crimson text-xl pl-3 inline">Log out</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;