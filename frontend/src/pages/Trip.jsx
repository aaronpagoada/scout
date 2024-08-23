import React, { useState, useEffect } from "react";
import getB64FromBuffer from "../js/getB64FromBuffer";

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
      {trip && <h1 className="text-4xl flex justify-center pb-8">{trip.location}</h1>}
      {trip && 
        <img src={`data:image/png;base64,${getB64FromBuffer(trip.imageBuffer)}`} alt="Map" />
      }
    </div>
  )
}

export default Trip