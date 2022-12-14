const pool =require('../dbconn')
const { body, validationResult } = require('express-validator');
const { request } = require('http');

class TodoRepo{

    async createToDo(id,task,done,created_by){
        let result = await pool.query(`Select * from public.user_table WHERE user_id = $1` ,[created_by] );
        let errorMsg;
        if(result.rowCount == 0){
            errorMsg = "User Does not exist";
            return errorMsg;
        }
        else{
            return await pool.query('INSERT INTO public.todolist(id,task,done,created_by) VALUES ($1,$2,$3,$4)',
            [id,task,done,created_by]);
        }
    }

    async createUserRepo(user_id,user_name,user_password,created_on){
        return await pool.query('INSERT INTO public.user_table(user_id,user_name,user_password,created_on) VALUES ($1,$2,$3,$4)',[user_id,user_name,user_password,created_on]);
    }

    async updateUserRepo(user_id,created_on){
        return await pool.query('UPDATE public.user_table SET created_on = $2 WHERE user_id = $1', [user_id,created_on]);
    }
    async loginUserRepo(user_name, user_password){
        let result1 = await pool.query(`select * from public.user_table where user_name = $1 AND user_password = $2`,[user_name,user_password]);
        if(result1.rowCount == 0){
            let error = "LogIn Failed";
            return error;
        }
        else{
            let name = user_name;
            let pass = user_password;
            let namepass = name + pass;
            let code = Buffer.from(namepass).toString('base64');
            return code;
        }

    }

}
module.exports=TodoRepo;