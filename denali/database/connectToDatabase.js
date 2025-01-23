const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectToDatabase = async () => {
  mongoose.connect(process.env.MONGO_URI)
    .then((connection) => {
      console.log(`Connected to host: ${connection.connection.host}`)
    })
    .catch((err) => {
      return console.error(err)
    })
};

module.exports = connectToDatabase


