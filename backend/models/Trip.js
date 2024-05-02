const mongoose = require("mongoose")

const Schema = mongoose.Schema

const tripSchema = new Schema({
	location: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	owner: {
		type: String,
		required: true
	},
	attendees: {
		type: Array,
		required: true
	},
	coordinates: {
		type: Array,
		required: true
	}
}, { timestamps: true })

module.export = mongoose.model("Trip", tripSchema)
	