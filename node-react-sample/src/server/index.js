const express = require('express')
const morgan = require('morgan')
const app = express()
const path = requier('path')
app.use(morgan('combined'))

app.get("/", function(req, res) {
  res.sendFile(path.resolve("./target/index.html"))
})
