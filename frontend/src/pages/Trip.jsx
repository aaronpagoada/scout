import React, { useState, useEffect } from "react";
import TripCard from "../components/TripCard";

function Trip() {
  const [trip, setTrip] = useState(null)
  const paths = window.location.pathname.split("/").filter(path => path !== "")
  const id = paths[paths.length - 1]
  
  useEffect(() => {
		const fetchTrip = async () => {
			const response = await fetch(`http://localhost:8000/trips/${id}`)
			const json = await response.json()

			if(response.ok){
				setTrip(json)
			}
		}

		fetchTrip()
	}, [])

  return (
    <div className="flex flex-col justify-center items-center pt-24">
      <h1 className="text-4xl flex justify-center pb-8">Trip</h1>
			<div className="w-5/6 grid grid-cols-4 gap-8">
				{trip && <TripCard key={trip._id} trip={trip} />}
			</div>
    </div>
  )
}

export default Trip