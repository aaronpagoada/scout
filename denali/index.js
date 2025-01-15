const express = require("express");
const connectToDatabase = require("./database/connectToDatabase.js");
const dotenv = require("dotenv").config();
const auth = require("./routes/auth.js");
// import cookieParser from "cookie-parser";
const cors = require("cors");

const app = express()

app.use(express.json())
app.use(cors())
// app.use(cookieParser())

connectToDatabase()
  .then(() => {
    app.listen(8000, () => {
      console.log("Server up on port 8000!")
    })
  })

app.use("/api/auth", auth)

