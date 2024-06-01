const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Trip = require("../models/tripModel.js")
const { getImageBuffer } = require("./utils/getImageBuffer.js")

dotenv.config()

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

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({ error: "Trip not found, bad trip id" })
	}

	try{
		const trip = await Trip.findById(id)
		res.status(200).json(trip)
	}catch(err){
		res.status(404).json({ error: "Trip not found" })
	}
}

const createTrip = async (req, res) => {
	const {owner, attendees, location, city, state, date, coordinates} = req.body
	const imageURL = `${process.env.MAPBOX_URL}${coordinates[0]},${coordinates[1]},${process.env.MAPBOX_SCOPE}/${process.env.MAPBOX_SIZE}?access_token=${process.env.MAPBOX_KEY}`

	const imageBuffer = await getImageBuffer(imageURL)

	try{
		const trip = await Trip.create({owner, attendees, location, city, state, date, coordinates, imageBuffer})
		res.status(200).json(trip)
	}catch(err){
		res.status(400).json({error: err.message})
	}
}

const deleteTrip = async (req, res) => {
	const { id } = req.params

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({ error: "Trip not found, bad trip id" })
	}

	try{
		const trip = await Trip.findOneAndDelete({ _id: id })
		res.status(200).json(trip)
	}catch(err){
		res.status(404).json({ error: "Trip not found" })
	}
}

const updateTrip = async (req, res) => {
	const { id } = req.params

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({ error: "Trip not found, bad trip id" })
	}

	try{
		const trip = await Trip.findOneAndUpdate({ _id: id }, {
			...req.body
		})
		res.status(200).json(trip)
	}catch(err){
		res.status(404).json({ error: "Trip not found" })
	}
}

module.exports = {
	getTrips,
	getTrip,
	createTrip,
	deleteTrip,
	updateTrip
}