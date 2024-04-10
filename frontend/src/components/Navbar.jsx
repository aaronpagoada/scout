import React from "react";
import logotext from "../logotext.svg";

function Navbar(){
  return(
    <nav className="h-16 pt-2 pb-2 pl-4 pr-4 flex justify-between">
      <img src={logotext} className="h-14" alt="logo" />
      <ul className="flex items-center">
        <li className="pr-2 inline">Trips</li>
        <li className="pl-2 inline">Plan a Trip</li>
      </ul>
    </nav>
  )
}

export default Navbar;