const { response, request } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3002

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

app.get('/', (req, res) => {
  res.send('Hello Wordsld!')
})

app.put('/todo/updateUser',todoController.updateUser)  //upadate user

app.post('/todo/createtodo', todoController.createToDo) //CREATE to do

app.get('/todo/login', todoController.LoginUser) // LOGIN


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



