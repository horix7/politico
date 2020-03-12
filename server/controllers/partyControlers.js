import party from '../models/partyMnagement'
import token from '../helpers/userTokens'

class PartyManagement {
    createParty(req, res) {
        let userData = token.decode(req.token)
        party.createParty(req.body)
        .then(results => {
            if(results == "party exists") {
                return res.status(403).json({
                    "status": 403,
                    "error":"party you are creating already exist "
                });
            } else {
                const {id, partyname, partyinfo,foundeon,partyaddress,logourl} = results[0]
                return res.status(201).json({
                    "status": 201,
                     "data":{
                         id: id,
                         name: partyname  || "",
                         hqaddress: partyaddress || "",
                         logourl: logourl || "",
                         partyinfo: partyinfo || "",
                         foundeon: foundeon || ""
                     }
                }); 
            }
        }) 
    }

    viewParty(userInfo) {

    }

    editParty() {

    }

    deletePartry() {
        
    }
}


export default new PartyManagement()
