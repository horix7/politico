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

class Office {
    async createOffice(officeInfo) {
        const allOffices = await client.query('select * from offices');
        const officeExist = allOffices.rows.some(n => n.officename == officeInfo.officename)
        if(officeExist) {
            return "office exists"
        }else {
            let data = `
            INSERT INTO offices
            (officename, officeinfo,officetype,goveremntid ,officeadress,officeleader ,officestatus ,leaderemail,logourl)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
            RETURNING * 
            `
            let inputs = [officeInfo.officename, officeInfo.officeinfo, officeInfo.officetype,officeInfo.goveremntid, officeInfo.officeaddress, officeInfo.officeleader,officeInfo.officestatus, officeInfo.leaderemail, officeInfo.logourl]

            await client.query(data,inputs)
            let partyCreated = await client.query('select * from offices where officename=$1', [officeInfo.officename])

            return partyCreated.rows
        }

    }

    async viewOffice(officeId) {
        let allParties = await client.query('select * from offices')
        if(allParties.rows.some(n => n.id == officeId)) {
            let partData  = await client.query('select * from parties where id=$1', [officeId])
            return partData.rows
        } else {
            return "dont exist"
        }
        
    }

    async viewAll() {
        let allParties = await client.query('select * from parties')
        return allParties.rows
    }
}


export default new Office()