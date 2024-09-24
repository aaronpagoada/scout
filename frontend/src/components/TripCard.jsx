import React from "react";
import { Link } from 'react-router-dom';
import getB64FromBuffer from "../js/getB64FromBuffer";

function TripCard({ trip }){
	let date = new Date(trip.date)
	const textDate = date.toDateString() 

  // We can display an image using the b64 encoding of a buffer
	const image = getB64FromBuffer(trip.imageBuffer)

  return(
    <Link to={`http://localhost:3000/trips/${trip._id}`}>
      <div className="bg-[#F8F5EC] rounded-xl drop-shadow-lg flex flex-col pt-4 pb-4 z">
        <div className="w-5/6 self-center">
            <img className="object-contain" height={600} width={400} src={`data:image/png;base64,${image}`} alt="Map" />
        </div>
        <div className="flex flex-col justify-start pl-2">
          <h1 className="text-xl">{trip.location}</h1>
          <h3 className="text-gray-500 text-l">{`${trip.city}, ${trip.state}`}</h3>
          <p className="text-l">{textDate}</p>
        </div>
      </div>
    </Link>
  )
}

export default TripCard