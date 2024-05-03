const express = require("express")

const {
	createTrip
} = require("../controllers/tripController.js")

const router = express.Router()

router.get("/", (req, res) => {
  return res.json("Get trips")
})

router.get("/:id", (req, res) => {
  return res.json("Get a trip")
})

router.post("/", createTrip)

module.exports = router