const TodoRepo = require('../repository/TodoRepo')
const { body, validationResult } = require('express-validator');


class TodoController {

    async createToDo(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.createToDo(request.body.id, request.body.task ,request.body.done ,request.body.created_by);
        response.json({
            "response ": res
            })
    }

    async createUser(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.createUserRepo(request.body.user_id,request.body.user_name, request.body.user_password, request.body.created_on);
        response.json({
            "status": "User created"
            })
    }
    //update query


    async updateUser(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.updateUserRepo(request.body.user_id,request.body.created_on);
        response.json({
            "status": "User Updated"
            })
    }
}
module.exports = TodoController;