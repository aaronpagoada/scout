const express = require("express")
const cors = require("cors")
const mongodb = require("mongodb")
const dotenv = require("dotenv")

const connect = require("./utils/connect.js")

const trips = require("./routes/trips.js")

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

const client = new mongodb.MongoClient(process.env.URI)

connect(client);

app.use("/trips", trips)

app.listen(8000, () => {
  console.log("Server up on port 8000")
})

 