const { response, request } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const pool = require('./dbConn')
const TodoController = require('./controllers/todoController')
const todoController = new TodoController()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.post('/todo/createUser', todoController.createUser) //CREATE A USER

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



