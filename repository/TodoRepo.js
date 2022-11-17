const pool =require('../dbconn')

class TodoRepo{

    async userTaskRepo(user_id,user_name,user_password,created_on){
        return await pool.query('INSERT INTO public.user_table(user_id,user_name,user_password,created_on) VALUES ($1,$2,$3,$4)',[user_id,user_name,user_password,created_on]);
    }

}
module.exports=TodoRepo;