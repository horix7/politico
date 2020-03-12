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

    viewParty(req, res) {
        party.viewParty(req.params.id)
        .then(results => {
            if(results == "dont exist") {
                return res.status(403).json({
                    "status": 403,
                    "error":"party you are requesting does not exist exist "
                });
            }else {
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

    getAllParties(req, res) {
        party.viewAll()
        .then(results => {
            let displayInfo = []
            results.forEach(par => {
                const {id, partyname, partyinfo,foundeon,partyaddress,logourl} = par
                displayInfo.push({
                    id: id,
                    name: partyname  || "",
                    hqaddress: partyaddress || "",
                    logourl: logourl || "",
                    partyinfo: partyinfo || "",
                    foundeon: foundeon || ""
                })

            });

            return res.status(200).json({
                "status": 200,
               "data": displayInfo
            });
        
        })
    }
    editParty() {

    }

    deletePartry() {
        
    }
}


export default new PartyManagement()
