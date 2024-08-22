function streamToBuffer(stream) {
  return new Promise((res, rej) => {
    const chunks = []

    stream.on('data', (chunk) => {
      chunks.push(chunk)
    })

    stream.on('end', () => {
      res(Buffer.concat(chunks))
    })

    stream.on('error', (err) => {
      rej(err)
    })

  })
}

module.exports = {
  streamToBuffer
}