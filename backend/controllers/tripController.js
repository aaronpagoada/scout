const Trip = require("../models/tripModel.js")

const getTrips = async (req, res) => {
	try{
		const trips = await Trip.find({})
		res.status(200).json(trips)
	}catch(err){
		res.status(400).json({error: err.message})
	}
}

const getTrip = async (req, res) => {
	const { id } = req.params

	try{
		const trip = await Trip.findById(id)
		res.status(200).json(trip)
	}catch(err){
		res.status(404).json({ error: "Trip not found"})
	}
}

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
	getTrips,
	getTrip,
	createTrip
}