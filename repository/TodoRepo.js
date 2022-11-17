const pool =require('../dbconn')

class TodoRepo{

    async createUserRepo(user_id,user_name,user_password,created_on){
        return await pool.query('INSERT INTO public.user_table(user_id,user_name,user_password,created_on) VALUES ($1,$2,$3,$4)',[user_id,user_name,user_password,created_on]);
    }

    async updateUserRepo(user_id,created_on){
        return await pool.query('UPDATE public.user_table SET created_on = $2 WHERE user_id = $1', [user_id,created_on]);
    }

}
module.exports=TodoRepo;