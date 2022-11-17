const TodoRepo = require('../repository/TodoRepo')

class TodoController {

    async createUser(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.userTaskRepo(request.body.user_id,request.body.user_name, request.body.user_password, request.body.created_on);
        response.json({
            "status": "User created"
            })
    }
    //update query
}
module.exports = TodoController;