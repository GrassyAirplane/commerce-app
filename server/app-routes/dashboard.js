const express = require("express")
const pool = require("../db")

const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello from dashboard!")
})

// <==== CRUD ====> 
router.get("/products", async(req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM product")
        res.json(allProducts["rows"])
    } catch (error) {
        console.error(error.message)
    }
})


module.exports = router