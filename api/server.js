const express = require("express")
const server = express()
const carsRouter = require("../router/carsrouter")
server.use(express.json())
server.use("/api/cars", carsRouter)
server.get("/", (req, res) => {
    res.status(200).json({ message: "The api is running" })
})

module.exports = server
