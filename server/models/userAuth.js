
import { Client, Pool } from 'pg';
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
        if( Object.keys(newUser).length <= 1) {
            return "true"
        } else if (userExist) {
            return "email"
        }
        else {
            let values = Object.values(newUser)     
            
            let results = 
            `INSERT INTO users
             (firstname,secondname,email,phone,nationalId,password,userprofile,address,userId,usertype,isadmin) VALUES
             ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING * 
            `

             let inserts = [newUser.firstname,newUser.secondname ,newUser.email,newUser.phone,newUser.nationalid,newUser.password,newUser.userprofile,newUser.address,newUser.userId,newUser.usertype, newUser.isadmin]
             
             await client.query(results, inserts, (err) => {
                 if(err) {
                     console.log(err)
                 }
             })

             let rezult = await client.query('select * from users where email=$1', [newUser.email])
            
             return rezult.rows
        }
     }

    async logiUser(userInfo) {
        const Alluser = await client.query('select * from users');
        const users = Alluser.rows
        let userExist = users.some(n => n.email == userInfo.email)
        if (userExist) {
            let fullInfo = await client.query('select * from users where email=$1', [userInfo.email]);
           if(fullInfo.rows[0].password == userInfo.password) {
                return fullInfo.rows
           } else {
            
               return "dont match"
           }           
            
        } else {
            return "no"
        }
    }

   async allUsers() {
        const allUsers = await client.query('select * from users');
        return allUsers.rows
    }

    async oneUser(userId) {
        const allUsers = await client.query('select * from users');
        let idExist = allUsers.rows.some(n => n.id == userId)
        if(idExist) {
            const userDetails = await client.query('select * from users where id=$1', [userId])
            return userDetails.rows
        } else {
            return 'no'
        }
    }
}


export default new User();

