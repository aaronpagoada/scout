import express from "express";
import cors from "cors";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())


async function connect(){
  try{
    await mongodb.MongoClient.connect(process.env.URI)
    console.log("Connected to Scout")
  } catch(err) {
    console.error(err)
  }
}

connect();

app.listen(8000, () => {
  console.log("Server up on port 8000")
})

