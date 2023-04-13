const express = require("express")
const pool = require("../db")

const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello from checkout!")
})

module.exports = router