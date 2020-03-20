import { Client } from 'pg';
import { encode, decode}  from '../helpers/userToken'

let client = new Client({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 5432,
    database: process.env.DATABASE_NAME,
})

client.connect()


let getUsers = async () => {
    try {
        let users = await client.query('select * from petition')
        users = users.rows 
    } catch(err) {
        console.error('failed')
    }
    finally {
        return users
    }
}

console.log(getUsers())
