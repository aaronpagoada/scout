const express = require("express")

const {
	createTrip, 
	getTrips,
	getTrip
} = require("../controllers/tripController.js")

const router = express.Router()

router.get("/", getTrips)

router.get("/:id", getTrip)

router.post("/", createTrip)

module.exports = router