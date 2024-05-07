import React, { useEffect, useState } from "react";
import TripCard from "../components/TripCard";

function Trips() {
	const [trips, setTrips] = useState(null)
	useEffect(() => {
		const fetchTrips = async () => {
			const response = await fetch("http://localhost:8000/trips")
			const json = await response.json()

			if(response.ok){
				setTrips(json)
			}
		}

		fetchTrips()
	}, [])

  return (
    <div>
      <h1 className="flex justify-center">Trips</h1>
			{trips && trips.map((trip) => (
				<TripCard key={trip._id} trip={trip} />
			))}
    </div>
  )
}

export default Trips