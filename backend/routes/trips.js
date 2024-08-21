const express = require("express")

const {
	createTrip, 
	deleteTrip,
	getTrips,
	getTrip,
	updateTrip
} = require("../controllers/tripController.js")

const router = express.Router()

router.get("/", getTrips)

router.get("/:id", getTrip)

router.post("/plan", createTrip)

router.delete("/:id", deleteTrip)

router.patch("/:id", updateTrip)

module.exports = router