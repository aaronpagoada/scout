import mongoose from "mongoose";

export const connectToDatabase = async () => {
  mongoose.connect(process.env.MONGO_URI)
    .then((connection) => {
      console.log("Connected to db")
      console.log(`Host: ${connection.connection.host}`)
      app.listen(8000, () => {
        console.log("Server up on port 8000")
      })
    })
    .catch((err) => {
      return console.error(err)
    })
};
