const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { streamToBuffer } = require('./streamToBuffer');

const getCoordinates = async (forwardURL) => {
	try{
		const response = await fetch(forwardURL)
		const coordinatesBuffer = await streamToBuffer(response.body)

    return JSON.parse(coordinatesBuffer.toString())
	}catch(err){
		console.error(err)
	}
} 

module.exports = {
	getCoordinates
}