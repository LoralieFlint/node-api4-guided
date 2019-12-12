const express = require("express")
// less safe
// const dotenv = require("dotenv")
// dotenv.config()

const app = express()
const host = process.env.host || "0.0.0.0"
const port = process.env.host || 8000

app.use((req, res, next) => {
	console.log(`[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`)
	next()
})

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
		cohort: process.env.LAMBDA_COHORT,
	})
})

app.listen(port, host, () => {
	console.log(`Running at http://${host}:${port}`)
})
//
// node-api4-guided
//