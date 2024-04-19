import React from "react";
import TripCard from "../components/TripCard";

function Trips() {
  return (
    <div>
      <h1 className="flex justify-center">Trips</h1>
      <TripCard />
      <TripCard />
      <TripCard />
      <TripCard />
    </div>
  )
}

export default Trips