const app = require("express")() // Base Express App 
const cors = require("cors")
const pool = require("./db")
//middleware
app.use(cors())
app.use(require("express").json())

// Start code
app.listen(5000, () => {
    console.log("server has started on port 5000")
})

// Routes
const dashboardRoutes = require("./app-routes/dashboard")
const checkoutRoutes = require("./app-routes/checkout")

app.use("/dashboard", dashboardRoutes)
app.use("/checkout", checkoutRoutes)

// Exporting app and pool
module.exports = {
    pool: pool
};
