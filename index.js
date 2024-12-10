const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.use('/', async(req, res) => {
    res.send("server is created")
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})