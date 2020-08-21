const express = require("express")
const carRouter = require("./car-router/car-router")

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())

server.use(carRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong"
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost${port}`)
})