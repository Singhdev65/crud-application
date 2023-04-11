const express = require("express")
const morgan = require("morgan")
const cors = require('cors')
const userRouter = require("./routes/userRoutes")

const app = express()
app.use(cors())
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json({ limit: "10kb" }))
app.use(express.urlencoded({ extended: true, limit: "10kb" }))

app.use("/api/v1/users", userRouter)

app.all("*", (req, res, next) => {
  return res.status(404).json("url not found")
})

module.exports = app
