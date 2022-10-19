const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const jsonParser = bodyParser.json()

//mc855_db - user
//grupoinventario - password

// TODO: extrair conexão com banco para /backend/db/conn.js
require('dotenv').config()
const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.ATLAS_URI)

app.get('/', async (req, res) => {
  await client.connect()
  const db = client.db('sample_mflix')
  const collection = db.collection('comments')
  const results = await collection.find({}).toArray()
  res.send(results)
})

app.post('/', jsonParser, (req, res) => {})
app.listen(3000)
