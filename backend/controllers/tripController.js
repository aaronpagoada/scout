const Trip = require("../models/tripModel.js")

const createTrip = async (req, res) => {
	const {location, date, owner, attendees, coordinates} = req.body

	try{
		const trip = await Trip.create({location, date, owner, attendees, coordinates})
		res.status(200).json(trip)
	}catch(err){
		res.status(400).json({error: err.message})
	}
}

module.exports = {
	createTrip
}