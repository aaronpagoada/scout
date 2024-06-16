import React from 'react'
import states from '../data/states'

function TripPlanForm(){
	return (
		<div className='w-3/5 flex flex-col items-center bg-yellow-100 p-4'>
			<form className='w-5/6'>
				<label for="location">Location *</label>
				<br></br>
				<input className='w-full h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' type="text" id='location'/>
				<br></br>
				<label for="attendees">Attendees</label>
				<br></br>
				<input className='w-full h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' type="text" id='attendees'/>
				<br></br>
				<label for="city">City *</label>
				<br></br>
				<input className='w-1/2 h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' type="text" id='city'/>
				<br></br>
				<label for="state">State *</label>
				<br></br>
				<input className='w-[128px] h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' list='states' id='state'/>
				<datalist id='states'>
					{states.map((state) => 
						<option value={`${state}`}></option>
					)}
				</datalist>
				<br></br>
				<label for="longitude">Longitude</label>
				<br></br>
				<input className='w-[128px] h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' type='text' id='longitude'/>
				<br></br>
				<label for="latitude">Latitude</label>
				<br></br>
				<input className='w-[128px] h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' type='text' id='latitude'/>
				<br></br>
				<label for="date">Date *</label>
				<br></br>
				<input className='w-[128px] h-8 pl-2 border-2 border-solid border-gray-300 focus:border-black focus:outline-none' type="date" id='state'/>
				<br></br>
				<button className='mt-4 w-32 rounded-md bg-[#026900] text-white hover:bg-black' type="submit">Submit</button>
			</form>
		</div>
	)
}

export default TripPlanForm