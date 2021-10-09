const express = require('express')
require("dotenv").config({path:"./config/.env"});
const connectdb = require('./config/dbConfig')
const port=5000;
const app = express()
app.use(express.json())
connectdb()


app.use("/api",require("./Routes/routers"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))