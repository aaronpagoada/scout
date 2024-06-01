const getImageBuffer = async (imageURL) => {
	try{
		const response = await fetch(imageURL)
		const imageStream = response.body
		const reader = imageStream.getReader()
		const readableStream = new ReadableStream({
			start(controller) {
				return pump();
				function pump() {
					return reader.read().then(({ done, value }) => {
						if (done) {
							controller.close();
							return;
						}
						controller.enqueue(value);
						return pump();
					});
				}
			},
		});
		
		const streamResponse = new Response(readableStream)
		const imageBuffer = Buffer.from(await streamResponse.arrayBuffer())
		return imageBuffer
	}catch(err){
		console.error(err)
	}
} 

module.exports = {
	getImageBuffer
}