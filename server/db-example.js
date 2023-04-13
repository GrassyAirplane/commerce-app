const Pool = require("pg").Pool
require('dotenv').config()

const pool = new Pool({
    user: "postgres",
    password: process.env.PSQLPASSWORD,
    host: "localhost",
    port: "5432",
    database: "commercedb"
})

module.exports = pool;