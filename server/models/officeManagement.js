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
            let inputs = [officeInfo.officename, officeInfo.officeinfo, officeInfo.officetype,officeInfo.goveremntid, officeInfo.hqaddress, officeInfo.officeleader,officeInfo.officestatus, officeInfo.leaderemail, officeInfo.logourl]

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

    async updateOffice(officeId, officeInfo) {
        const allOffices = await client.query('select * from offices');
        const officeExist = allOffices.rows.some(n => n.id == officeId)
        if(officeExist) {
            let data = `
            UPDATE offices SET 
            officename=$1, officeinfo=$2, officetype=$3,goveremntid=$4 ,officeadress=$5,officeleader=$6 ,officestatus=$7 ,leaderemail=$8,logourl=$9
            WHERE id=$10 
            `
            let inputs = [officeInfo.officename, officeInfo.officeinfo, officeInfo.officetype,officeInfo.goveremntid, officeInfo.hqaddress, officeInfo.officeleader,officeInfo.officestatus, officeInfo.leaderemail, officeInfo.logourl, officeId]

            await client.query(data,inputs)
            let partyCreated = await client.query('select * from offices where id=$1', [officeId])

            return partyCreated.rows
            
        }else {
            return "office dont exist"
        }
    }

    async deleteOffice(officeId) {
        const office = await client.query('select * from offices where id=$1', [officeId])

        if(office && office.rows.length > 0) 
         {
            console.log(office.rows)
            await client.query('DELETE FROM offices WHERE id=$1', [officeId])
            return office.rows 
        } else {
            return "office dont exist"
        }

    }

    async postCandidate(officeId,candidateInfo) {
        
        const office = await client.query('select * from offices where id=$1', [officeId])
        if(office && office.rows.length > 0) {
            let userInfo = await client.query('select * from users where id=$1', [candidateInfo.candidateid])
            
            if(userInfo && userInfo.rows.length > 0) {
            const {firstname,secondname,userprofile} = userInfo.rows[0]
            
            let data = `
            INSERT INTO candidates
            (firstname,secondname,applyid,candidateid,candidateinfo,candidatebackground,profileimage )
            VALUES ($1,$2,$3,$4,$5,$6,$7)
            RETURNING * 
            `

            let inputs  = [firstname, secondname, officeId, candidateInfo.candidateid,candidateInfo.candidateinfo, candidateInfo.candidatebackground,userprofile ]
            let existUser = await client.query("select * from candidates where firstname=$1 and secondname=$2",[firstname,secondname])
            
            if(existUser && existUser.rows.length > 0) {
                return 'this candidate is already registered'
            } else {
                await client.query(data,inputs)

                let createdUser = await client.query("select * from candidates where firstname=$1 and secondname=$2",[firstname,secondname])
                return createdUser.rows
            }
            
            }else {
                return 'you are reffering to a none existing user'
            }
        } else {
           return "office dont exist"
       }
    }

    async allCandidate() {
        let candidates = await client.query('select * from candidates')
        return candidates.rows
    }

    async createVote(tokenId, voteInfo) {
        const {createdOn,office,candidate} = voteInfo
        let votesDb = await client.query('select * from votes')
        let users = await client.query('select * from users where id=$1',[tokenId])
        let offis = await client.query('select * from offices')
        let officeVoted = offis.rows.some(n => n.id == office)

            let creator = users.rows[0].email
            let candidates = await client.query('select * from candidates where id=$1', [candidate])
            console.log(candidates.rows)
        let voterExist = votesDb.rows.some(n => n.voter == creator)
            if(officeVoted ) {
                return 'you have voted in this office'
            } else if (voterExist) {
                return  'vote already exist'
            }
           else if(candidates.rows.length > 0) {
                let party = candidates.rows[0].partyid
                let votes = `
                INSERT INTO votes
                (votefor,office,createdon,votecount,party,voter )
                VALUES ($1,$2,$3,$4,$5,$6)
                RETURNING * 
                `
        
                let inputs = [candidate, office,createdOn,0,party,creator]
                let voteCreated = await client.query(votes,inputs)
        
                return voteCreated.rows
            } else {
                return 'candidate does not exist'
            }              
      
    }

    async viewResults(officeId) {
        let candidates = await client.query('select * from votes where office=$1', [officeId])
        if(candidates) {
            return candidates.rows
        } else {
            return 'office does not exist'
        }
    }

    async createPetition(petitionInfo) {
        const {createdBy, office,body,evidence} = petitionInfo

        let offices = await client.query('select * from offices where id=$1',[office])
        if(offices.rows.length > 0) {
            let status = offices.rows[0].officestatus
            if(status !== 'active') {
                let petition = `
                INSERT INTO petition
                (createby,office,supports,evidence,information )
                VALUES ($1,$2,$3,$4,$5)
                RETURNING * 
                `
                let inputs = [createdBy, office,0,evidence,body]
                
               let tryi =  await client.query(petition,inputs)
                console.log(tryi, 'here')
                let petitionCreated = await client.query('select * from petition')
                console.log(petitionCreated)
                return petitionCreated.rows[petitionCreated.rows.length - 1]
            } else {
                return 'office is still active'
            }
        } else {
            return 'office does not exist'
        }
   
    }
}


export default new Office()

