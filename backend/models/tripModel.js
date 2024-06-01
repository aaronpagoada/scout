const mongoose = require("mongoose")

const Schema = mongoose.Schema

const tripSchema = new Schema({
	owner: {
		type: String,
		required: true
	},
	attendees: {
		type: Array,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	coordinates: {
		type: Array,
		required: true
	},	
	imageBuffer: {
		type: Buffer,
		required: true,
		contentType: String
	}
}, 
{ timestamps: true })

module.exports = mongoose.model("Trip", tripSchema)

	