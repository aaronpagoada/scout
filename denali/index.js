import express from "express";
import { connectToDatabase } from "./database/connectToDatabase.js";
import dotenv from "dotenv";
import auth from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

connectToDatabase()

app.use("/api/auth", auth)

app.listen(8000, () => {
  console.log("Server up on port 8000!")
})
