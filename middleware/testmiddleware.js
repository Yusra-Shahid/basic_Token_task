require('dotenv').config()
const pool= require('../dbConn')
const TodoController =require('../controllers/todoController')
const { request } = require('http')
const { response } = require('express')


const todo = new TodoController()
const CheckBasicToken= (request,response,next) => {
    if(request.headers && request.headers['authorization'] && request.headers['authorization'].split('')[1]== request.body.code)
    next();
    else
response.status(401).json({
    "error": "Invalid token"
})
}
module.exports=CheckBasicToken;
