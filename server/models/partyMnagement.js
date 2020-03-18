import token from '../helpers/userTokens'
import { Pool } from 'pg';

import 'dotenv/config'

const client = new Pool({
    connectionString: process.env.DATATBASE_URL,
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
            let inputs = [partyInfo.partyname, partyInfo.partinfo, partyInfo.foundeon,partyInfo.goveremntid, partyInfo.hqaddress, partyInfo.partyleader,partyInfo.partymortal, partyInfo.leaderemail, partyInfo.logourl]

            await client.query(data,inputs)
            let partyCreated = await client.query('select * from parties where partyname=$1', [partyInfo.partyname])

            return partyCreated.rows
        }

    }

    async viewParty(partyId) {
        let allParties = await client.query('select * from parties')
        if(allParties.rows.some(n => n.id == partyId)) {
            let partData  = await client.query('select * from parties where id=$1', [partyId])
            return partData.rows
        } else {
            return "dont exist"
        }
        
    }

    async viewAll() {
        let allParties = await client.query('select * from parties')
        return allParties.rows
    }
    
    async updateParty(partyId, partyInfo) {
        const allParties = await client.query('select * from parties');
        const partyExist = allParties.rows.some(n => n.id == partyId)
        if(partyExist) {
            let data = `
            UPDATE parties SET 
            partyname=$1, partinfo=$2,foundedon=$3,goveremntid=$4,partyaddress=$5,partyleader=$6,partymortal=$7,leaderemail=$8,logourl=$9
            WHERE id=$10 
            `
            let inputs = [partyInfo.partyname, partyInfo.partinfo, partyInfo.foundedon,partyInfo.goveremntid, partyInfo.partyaddress, partyInfo.partyleader,partyInfo.partymortal, partyInfo.leaderemail, partyInfo.logourl, partyId]

            await client.query(data,inputs)
            let partyCreated = await client.query('select * from parties where id=$1', [partyId])

            return partyCreated.rows
            
        }else {
            return "party dont exist"
        }
    }

    async deleteParty(partyId) {
        const party = await client.query('select * from parties where id=$1', [partyId])

        if(party && party.rows.length > 0) 
         {
            await client.query('DELETE FROM parties WHERE id=$1', [partyId])
            return party.rows 
        } else {
            return "party dont exist"
        }

    }
}


export default new Party()