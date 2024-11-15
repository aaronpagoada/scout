import React, { useEffect, useState } from "react";
import TripCard from "../components/TripCard";
// const data = require("../data/trips.json")


function TripsPage() {
  const [trips, setTrips] = useState(null)
  useEffect(() => {
    // setTrips(data.trips)
    const fetchTrips = async () => {
      const response = await fetch("http://localhost:8000/trips")
      const json = await response.json()

      if (response.ok) {
        setTrips(json)
      }
    }

    fetchTrips()
  }, [])

  if (!trips) {
    return (
      <div className="pt-24">
        <h1 className="flex justify-center">Loading trips...</h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center pt-24">
      <h1 className="text-4xl flex justify-center pb-8">Trips</h1>
      <div className="w-5/6 grid grid-cols-4 gap-8">
        {trips && trips.map((trip) => (
          <TripCard key={trip._id} trip={trip} />
        ))}
      </div>
    </div>
  )
}

export default TripsPage
