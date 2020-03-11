import { Client } from 'pg';
import { encode, decode}  from '../helpers/userToken'

let client = new Client({
    user: "postgres",
    password: "paul",
    host: "localhost",
    port: 5432,
    database: "politico"
})

client.connect()


let getUsers = async () => {
    try {
        let users = await client.query('select * from parties')
        users = users.rows 
    } catch(err) {
        console.error('failed')
    }
    finally {
        return users
    }
}

console.log(getUsers())
