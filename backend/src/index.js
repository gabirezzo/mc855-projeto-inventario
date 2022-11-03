const express = require('express')
const mongoose = require('mongoose')

const app = express()

const server = require('http').Server(app)

require('dotenv').config()
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(require('./router'))

server.listen(3000, () => {
  console.log(':) Server started on port 3000')
})
