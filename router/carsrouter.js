const express = require("express")
const router = express.Router()
const db = require("../data/dbconfig")

router.get("/", (req, res) => {
    db("cars")
        .then(cars => res.status(200).json(cars))    
})
router.post("/", (req, res) => {
    db("cars")
        .insert(req.body)
        .then(() => res.status(201).json(req.body))
        .catch(() => res.status(500).json({ message: "Error creating car entry." }))
})
module.exports = router