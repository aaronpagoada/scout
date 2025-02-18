const express = require("express");
const connectToDatabase = require("./database/connectToDatabase.js");
const dotenv = require("dotenv")
const auth = require("./routes/auth.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express()

app.use(express.json())
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173"
}))
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

connectToDatabase()
  .then(() => {
    app.listen(8000, () => {
      console.log("Server up on port 8000!")
    })
  })

app.use("/api/auth", auth)

