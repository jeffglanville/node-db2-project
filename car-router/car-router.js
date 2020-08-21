const express = require("express")
const knex = require("knex")

const db = require("../data/config")
const { whereNotExists } = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        res.json(await db("cars"))
    }catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const car = await db("cars").where({id}).first()

        res.json(car)
    }catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const [id] = await db("cars").insert(req.body)
        const newCar = await db("cars").where({id}).first()

        res.status(201).json(newCar)

    }catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        await db("cars")
        .update({
            VIN: req.body.VIN,
            Make: req.body.Make,
            Model: req.body.Model,
            Mileage: req.body.Mileage,
            TransmissionType: req.body.TransmissionType,
            Title: req.body.Title
        })
        .where("id", req.params.id)

        const car = await db("cars")
        .where("id", req.params.id)
        .first()

        res.json(car)
    }catch (err) {
        next(err)
    }
})

router.delete("/:id", async(req, res, next) => {
    try {
        await db("cars").where("id", req.params.id)
        .del()

        res.status(200).json({
            message: "The selected car has been deleted from the database."
        })
    }catch (err) {
        next(err)
    }
})

module.exports = router