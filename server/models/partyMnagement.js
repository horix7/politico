import token from '../helpers/userTokens'
import { Client } from 'pg';

let client = new Client({
    user: "postgres",
    password: "paul",
    host: "localhost",
    port: 5432,
    database: "politico"
})

client.connect()

class Party {
    async createParty(partyInfo) {
        const allParties = await client.query('select * from parties');
        const partyExist = allParties.rows.some(n => n.partyname == partyInfo.partyname)
        if(partyExist) {
            return "party exists"
        }else {
            let data = `
            INSERT INTO parties
            (partyname, partinfo,foundedon,goveremntid,partyaddress,partyleader,partymortal,leaderemail,logourl)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
            RETURNING * 
            `
            let inputs = [partyInfo.partyname, partyInfo.partinfo, partyInfo.foundedon,partyInfo.goveremntid, partyInfo.partyaddress, partyInfo.partyleader,partyInfo.partymortal, partyInfo.leaderemail, partyInfo.logourl]

            await client.query(data,inputs)
            let partyCreated = await client.query('select * from parties where partyname=$1', [partyInfo.partyname])

            return partyCreated.rows
        }

    }
}


export default new Party()