const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const trips = require("./routes/trips.js")

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.URI)
	.then(() => {
		console.log("Connected to db")
		app.listen(8000, () => {
		console.log("Server up on port 8000")
		})
	})
	.catch((err) => {
		return console.error(err)
	})

app.use("/trips", trips)
