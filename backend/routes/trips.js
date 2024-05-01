const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  return res.json("Get trips")
})

module.exports = router