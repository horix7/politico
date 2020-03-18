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
                const {id, partyname, partinfo,foundedon,partyaddress,logourl} = results[0]
                return res.status(201).json({
                    "status": 201,
                     "data":{
                         id: id,
                         name: partyname  || "",
                         hqaddress: partyaddress || "",
                         logourl: logourl || "",
                         partyinfo: partinfo || "",
                         foundeon: foundedon || ""
                     }
                }); 
            }
        }) 
    }

    viewParty(req, res) {
                
        if(!Number.isInteger(parseInt(req.params.id))) {
            return res.status(400).json({
                "status": 400,
                "message": "the id you specified is not valid "
            }); 
        }
        party.viewParty(parseInt(req.params.id).toString())
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
    editParty(req, res) {
                
        if(!Number.isInteger(parseInt(req.params.id))) {
            return res.status(400).json({
                "status": 400,
                "message": "the id you specified is not valid "
            }); 
        }
        party.updateParty(parseInt(req.params.id).toString(), req.body)
        .then(results => {
            if(results == "party dont exist") {
                return res.status(403).json({
                    "status": 403,
                    "error":"party you are updating does not exist "
                });
            } else {
                const {id, partyname, partyinfo,foundeon,partyaddress,logourl} = results[0]
                return res.status(200).json({
                    "status": 200,
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

    deletePartry(req,res) {
                
        if(!Number.isInteger(parseInt(req.params.id))) {
            return res.status(400).json({
                "status": 400,
                "message": "the id you specified is not valid "
            }); 
        }
        party.deleteParty(parseInt(req.params.id).toString())
        .then(results => {
            if(results == "party dont exist") {
                return res.status(403).json({
                    "status": 403,
                    "error":"party does not exists "
                });   
            } else {
                return res.status(200).json({
                    "status": 200,
                     "data":[{
                         "message": `deleted party ${results[0].partyname} successfully`
                     }]
                }); 
            }
        })
        
    }
}


export default new PartyManagement()
