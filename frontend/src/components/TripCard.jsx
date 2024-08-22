import React from "react";
import { Link } from 'react-router-dom';
import { Buffer } from "buffer";

function TripCard({ trip }){
	let date = new Date(trip.date)
	const textDate = date.toDateString() 

	const image = Buffer.from(trip.imageBuffer).toString('base64')

  return(
    <div>
			<div className="flex justify-center bg-yellow-100">
        <Link to={`http://localhost:3000/trips/${trip._id}`}>
      	  <img height={600} width={400} src={`data:image/png;base64,${image}`} alt="Map" />
        </Link>
			</div>
			<div className="flex flex-col justify-start pl-2">
				<h1 className="text-xl">{trip.location}</h1>
				<h3 className="text-gray-500 text-l">{`${trip.city}, ${trip.state}`}</h3>
				<p className="text-l">{textDate}</p>
			</div>
		</div>
  )
}

export default TripCard