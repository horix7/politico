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

