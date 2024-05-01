async function connect(client){
  try{
    await client.connect();
    console.log("Connected to Scout")
  } catch(err) {
    console.error(err)
  }
}

export default connect