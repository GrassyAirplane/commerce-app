const express = require("express")
const pool = require("../db")

const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello from dashboard!")
})

// <==== CRUD ====> 

// Get all products
router.get("/product", async(req, res) => {
    try {
        const allProducts = await pool.query("SELECT product_id, product_name, product_price FROM product")
        res.json(allProducts["rows"])
    } catch (error) {
        console.error(error.message)
    }
})

// Get specifc product
router.get("/product/:id", async(req, res) => {
    try {
        const { id } = req.params
        const product = await pool.query (
            "SELECT product_id, product_name, product_price FROM product WHERE product_id = $1" ,
            [id]
        )
        res.json(product.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// Create a product
router.post("/product", async(req, res) => {
    try {
        console.log(req.body)
        const { product_name, product_price } = req.body
        if (!product_name || !product_price) {
            return res.status(400).send("Product name and price are required.")
        }
        const newProduct = await pool.query(
            "INSERT INTO product (product_name, product_price) VALUES($1, $2) RETURNING *",
            [product_name, product_price]
        )
        res.json(newProduct)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal server error')
    }
})

// Delete a product 
router.delete("/product/:id", async(req, res) => {
    try {
        const { id } = req.params
        const deleteProduct = await pool.query(
            "DELETE FROM product WHERE product_id = $1",
            [id]
        )
        res.json(deleteProduct)
    } catch (error) {
        console.error(error.message)
    }
})

// Update a product Price
router.put('/product/:id', async(req, res) => {
    try {
        const { id } = req.params
        const { product_price } = req.body
        const updateProduct = await pool.query(
            "UPDATE product SET product_price = $1 WHERE product_id = $2",
            [product_price, id]
        )
        res.json(updateProduct.rows)
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = router