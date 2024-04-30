import express from "express";
import cors from "cors";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

const client = new mongodb.MongoClient(process.env.URI)

async function connect(client){
  try{
    await client.connect();
    console.log("Connected to Scout")
  } catch(err) {
    console.error(err)
  }
}

async function readDatabases(client){
  try{
    const databases = await client.db().admin().listDatabases();
    const databaseNames = databases.databases.map(db => db.name)
    return databaseNames
  } catch(err) {
    console.error(err)
  }
}

connect(client);

app.get("/trips", async (req, res) => {
  const data = await readDatabases(client);
  return res.json(data)
})

app.listen(8000, () => {
  console.log("Server up on port 8000")
})

 