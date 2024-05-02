const express = require("express")

const Trip = require("../models/tripModel.js")

const router = express.Router()

router.get("/", (req, res) => {
  return res.json("Get trips")
})

router.get("/:id", (req, res) => {
  return res.json("Get a trip")
})

router.post("/", async (req, res) => {
	const {location, date, owner, attendees, coordinates} = req.body

	try{
		const trip = await Trip.create({location, date, owner, attendees, coordinates})
		res.status(200).json(trip)
	}catch(err){
		res.status(400).json({error: err.message})
	}
})

module.exports = router