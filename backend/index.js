import express from "express";
import cors from "cors";
import mongodb from "mongodb";
import dotenv from "dotenv";

import connect from "./utils/connect.js";
import readDatabases from "./utils/readDatabases.js";

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

const client = new mongodb.MongoClient(process.env.URI)

connect(client);

app.get("/trips", async (req, res) => {
  const data = await readDatabases(client);
  return res.json(data)
})

app.listen(8000, () => {
  console.log("Server up on port 8000")
})

 