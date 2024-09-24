const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { streamToBuffer } = require('./streamToBuffer');

const getImageBuffer = async (imageURL) => {
  try{
		const response = await fetch(imageURL)
    const imageBuffer = await streamToBuffer(response.body)

    return imageBuffer
    
    //   .then(response => response.body)
    // .then(res => res.on('readable', () => {
    //   let chunk;
    //   while (null !== (chunk = res.read())) {
    //     data.push(chunk)
    //   }
    // }))
    // .then(res => res.on('end', () => {
    //   const imageBuffer = Buffer.concat(data)
    //   return imageBuffer
    // }))
    
    // const imageStream = response.body
		// const reader = imageStream.getReader()
		// const readableStream = new ReadableStream({
		// 	start(controller) {
		// 		return pump();
		// 		function pump() {
		// 			return reader.read().then(({ done, value }) => {
		// 				if (done) {
		// 					controller.close();
		// 					return;
		// 				}
		// 				controller.enqueue(value);
		// 				return pump();
		// 			});
		// 		}
		// 	},
		// });
		
		// const streamResponse = new Response(readableStream)
		// const imageBuffer = Buffer.from(await streamResponse.arrayBuffer())
		// return imageBuffer
	}catch(err){
		console.error(err)
	}
} 

module.exports = {
	getImageBuffer
}