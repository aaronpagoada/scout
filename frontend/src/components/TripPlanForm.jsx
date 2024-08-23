import React, { useState } from 'react'
import states from '../data/states'

function TripPlanForm(){
  // Is there a better way to handle so many state vars in a form?
  // It works, but doesn't look very pretty

	const [owner, setOwner] = useState("")
	const [location, setLocation] = useState("")
	const [attendees, setAttendees] = useState([""])
	const [city, setCity] = useState("")
	const [state, setState] = useState("")
	const [longitude, setLongitude] = useState("")
	const [latitude, setLatitude] = useState("")
	const [date, setDate] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

	const handleSubmit = async (e) => {
    e.preventDefault()

    const coordinates = [longitude, latitude]

    const trip = {owner, attendees, location, city, state, date, coordinates}

    const response = await fetch("http://localhost:8000/trips/plan", {
      method: "POST",
      body: JSON.stringify(trip),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const json = await response.json()

    if(response.ok){
      setOwner("")
      setLocation("")
      setAttendees([""])
      setCity("")
      setState("")
      setLongitude("")
      setLatitude("")
      setDate("")
      setError(null)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 4000)
    } else {
      setError(json.error)
    }
  }

	return (
		<div className='w-3/5 flex flex-col items-center bg-yellow-100 p-4'>
			{success && <div id='success'>New trip created!</div>}
      {error && <div id='error'>{error}</div>}
      <form className='w-5/6' onSubmit={handleSubmit}>
				<label for="owner">Owner</label>
				<br></br>
				<input 
					className='w-full h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' 
					type="text" 
					id='owner'
					value={owner}
					onChange={(e) => setOwner(e.target.value)}
				/>
				<br></br>
				<label for="location">Location</label>
				<br></br>
				<input 
					className='w-full h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' 
					type="text" 
					id='location'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<br></br>
				<label for="attendees">Attendees</label>
				<br></br>
				<input 
					className='w-full h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' 
					type="text" 
					id='attendees'
					value={attendees}
					onChange={(e) => setAttendees([e.target.value])}
				/>
				<br></br>
				<label for="city">City</label>
				<br></br>
				<input 
					className='w-1/2 h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' 
					type="text" 
					id='city'
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<br></br>
				<label for="state">State</label>
				<br></br>
				<input 
					className='w-[128px] h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' 
					list='states' 
					id='state'
					value={state}
					onChange={(e) => setState(e.target.value)}
				/>
				<datalist id='states'>
					{states.map((state) => 
						<option value={`${state}`}></option>
					)}
				</datalist>
				<br></br>
				<label for="longitude">Longitude</label>
				<br></br>
				<input 
					className='w-[128px] h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' 
					type='text' 
					id='longitude'
					value={longitude}
					onChange={(e) => setLongitude(e.target.value)}
				/>
				<br></br>
				<label for="latitude">Latitude</label>
				<br></br>
				<input 
					className='w-[128px] h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' 
					type='text' 
					id='latitude'
					value={latitude}
					onChange={(e) => setLatitude(e.target.value)}
				/>
				<br></br>
				<label for="date">Date</label>
				<br></br>
				<input 
					className='w-[140px] h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' 
					type="date" 
					id='state'
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<br></br>
				<button 
					className='mt-4 w-32 rounded-md bg-[#026900] text-white hover:bg-black' 
					type="submit"
				>
          Create new trip
				</button>
			</form>
		</div>
	)
}

export default TripPlanForm