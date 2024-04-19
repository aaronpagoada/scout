import React from "react";
import logo from "../logo.svg";

function TripCard(){
  return(
    <div>
      <img src={logo} alt="" />
      <h3>Title</h3>
      <p>Date</p>
      <p>Location</p>
    </div>
  )
}

export default TripCard