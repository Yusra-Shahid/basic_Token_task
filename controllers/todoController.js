const TodoRepo = require('../repository/TodoRepo')

class TodoController {

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