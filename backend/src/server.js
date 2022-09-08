const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()
const connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3308',
    user     : 'root',
    password : '123mudar', // TODO: extrair configurações sensiveis para arquivo a parte
    database : 'mc855'
})

app.get('/', (req, res) => {
    connection.connect()
    connection.query(`SELECT * FROM ITEM`, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
        connection.end()
    })      
})

app.post('/', jsonParser, (req, res) => {
    connection.connect()
    console.log(req.body)
    let insertQuery = `INSERT INTO ITEM(ID, REGDATE, REGUSER) VALUES(${req.body.id}, "${req.body.regdate}", "${req.body.reguser}")`
    connection.query(insertQuery, (err, result) => {
        if (err) throw console.log(err)
        res.send("Record inserted")
        connection.end()
    })
})
app.listen(3000)