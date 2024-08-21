const getCoordinates = async (forwardURL) => {
	try{
		const response = await fetch(forwardURL)
		const stream = response.body
		const reader = stream.getReader()
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
		return streamResponse.json()
	}catch(err){
		console.error(err)
	}
} 

module.exports = {
	getCoordinates
}