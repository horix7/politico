
import { Client } from 'pg';
import 'dotenv/config'

let client = new Client({
    user: "postgres",
    password: "paul",
    host: "localhost",
    port: 5432,
    database: "politico"
})

client.connect()
// 
class User {
    async createUser(newUser){
        const allUsers = await client.query('select * from users');
        let users = allUsers.rows
        const userExist = users.some(n => n.email == newUser.email)
        if(newUser == {}) {
            return "no"
        }
        if (userExist) {
            return "user exist"
        } else {
            let values = newUser.values()

            let results  = await client.query('insert into users (firstname,secondname,email,phone,nationalid,livesat,userid,password,userprofile) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)', newUser)
            console.log(values)
            return results
        }
     }

    async logiUser(userInfo) {
        await client.connect()
        const allUsers = await client.query('select * from users');
        const userExist = allUsers.some(n => n.email == userInfo.email)
        if (userExist) {

            return "user exist"
        } else {

            return results
        }
    }

    allUsers() {

    }
}


export default new User();

