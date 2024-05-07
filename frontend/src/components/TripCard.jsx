import React from "react";
import logo from "../logo.svg";

function TripCard({ trip }){
  return(
    <div>
      <img src={logo} alt="" />
      <h3>{trip.location}</h3>
      <p>{trip.date}</p>
      <p>{trip.owner}</p>
    </div>
  )
}

export default TripCard