const express = require("express")
const pool = require("../db")

const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello from dashboard!")
})

// <=== Helper ===>
const validate_api_key = async (apiKey) => {
    const validKey = await pool.query(
        "SELECT COUNT(*) FROM api_key WHERE personal_key = $1",
        [apiKey])
    return validKey.rows[0].count >= 1
}

const validate_password = async (password) => {
    const validPassword = await pool.query(
        "SELECT COUNT(*) FROM dashboard WHERE password = $1",
        [password])
    return validPassword.rows[0].count >= 1
}

// <==== CRUD ====> 
/*
 * {
 *  "api_key": 'asdfghjkl',
 *   "params": {}   
 * }
 *
**/
// Test Login
router.post("/login", async(req, res) => {
    try {
        const { api_key, params } = req.body
        if (!await validate_api_key(api_key)) {
            return res.status(400).send("Invalid Api Key")
        }
        const { password } = params
        if (!await validate_password(password)) {
            return res.status(400).send("Invalid Password")
        }
        // Log the user in and send back a response
        res.status(200).send("Logged in successfully!")
    } catch (error) {
        console.error(error.message)
    }
})

// Get all products | Post because if api key
router.post("/product", async(req, res) => {
    try {
        const { api_key, params } = req.body
        // if (!await validate_api_key(api_key)) {
        //     return res.status(400).send("Invalid Api Key")
        // }

        const all_products = await pool.query("SELECT product_id, product_name, product_price, product_affiliate_link, product_image_link FROM product")
        res.json(all_products["rows"])
    } catch (error) {
        console.error(error.message)
    }
})

// Get specifc product
router.get("/product/:id", async(req, res) => {
    try {
        const { id } = req.params
        const { api_key, params } = req.body

        if (!await validate_api_key(api_key)) {
            return res.status(400).send("Invalid Api Key")
        }
        const product = await pool.query (
            "SELECT product_id, product_name, product_price, product_affiliate_link, product_image_link FROM product WHERE product_id = $1" ,
            [id]
        )
        res.json(product.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// Create a product
router.post("/product/create", async(req, res) => {
    try {
        const { api_key, params } = req.body

        if (!await validate_api_key(api_key)) {
            return res.status(400).send("Invalid Api Key")
        }

        const { product_name, product_price, product_affiliate_link, product_image_link} = params
        if (!product_name || !product_price) {
            return res.status(400).send("Product name and price are required.")
        }
        const newProduct = await pool.query(
            "INSERT INTO product (product_name, product_price, product_affiliate_link, product_image_link) VALUES($1, $2, $3, $4) RETURNING *",
            [product_name, product_price, product_affiliate_link, product_image_link]
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
        const { api_key, params } = req.body

        if (!await validate_api_key(api_key)) {
            res.status(400).send("Invalid Api Key")
        }

        const deleteProduct = await pool.query(
            "DELETE FROM product WHERE product_id = $1",
            [id]
        )
        res.json("deleted")
    } catch (error) {
        console.error(error.message)
    }
})

// Update a product Price
router.put('/product/:id', async(req, res) => {
    try {
        const { id } = req.params
        const { api_key, params } = req.body

        if (!await validate_api_key(api_key)) {
            res.status(400).send("Invalid Api Key")
        }
        const { product_name, product_price, product_affiliate_link, product_image_link } = params
        const updateProduct = await pool.query(
            "UPDATE product SET product_name = $2, product_price = $3, product_affiliate_link = $4, product_image_link = $5 WHERE product_id = $1",
            [id, product_name, product_price, product_affiliate_link, product_image_link]
        )
        res.json(updateProduct.rows)
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = router