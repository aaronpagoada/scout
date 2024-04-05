import React from "react";
import logotext from "../logotext.svg";

function Navbar(){
  return(
    <nav className="h-16 pt-2 pb-2 pl-4">
      <img src={logotext} className="h-14" alt="logo" />
    </nav>
  )
}

export default Navbar;