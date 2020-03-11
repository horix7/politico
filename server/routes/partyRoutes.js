
import { Client } from 'pg';
import 'dotenv/config'

let client = new Client({
    user: "postgres",
    password: "paul",
    host: "localhost",
    port: 5432,
    database: "politico"
})

let userDb;

let connector = async ()  => {
    try {
        await client.connect()
        userDb = await client.query('select * from users')
    } catch (e) {
        console.log(e)
    }
}

class Party {
    createParty(newUser) {

      client.connect()
      .then(() => client.query('select * from parties'))
      .then(res => {
          if(res.rows.some(user = usre.name == newUser.name)) {
              return "email exists"
          } else {
            client.query('insert into users (partyname,partyinfo,foundedon,goveremntid ,partyaddress,candid,logourl,partyleader) values ($1,$2,$3,$4,$5,$6,$7,$8)')
          }
      })
      .finally(console.log("done"))
    }

    viewParty(userInfo) {

    }

    editParty() {

    }

    deletePartry() {
        
    }
}


export default new User();

