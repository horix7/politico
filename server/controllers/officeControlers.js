import office from '../models/officeManagement'
import token from '../helpers/userTokens'

class officeManagement {
    createOffice(req, res) {
        let userData = token.decode(req.token)
        office.createOffice(req.body)
        .then(results => {
            if(results == "office exists") {
                return res.status(409).json({
                    "status": 409,
                    "error":"office you are creating already exist "
                });
            } else {
                console.log(results)
                const {id, officename, officeinfo,foundeon,officeadress ,logourl} = results[0]
                return res.status(201).json({
                    "status": 201,
                     "data":{
                         id: id,
                         name: officename  || "",
                         hqaddress: officeadress  || "",
                         logourl: logourl || "",
                         officeinfo: officeinfo || "",
                         foundeon: foundeon || ""
                     }
                }); 
            }
        }) 
    }

    viewOffice(req, res) {
        
        if(!Number.isInteger(parseInt(req.params.id))) {
            return res.status(400).json({
                "status": 400,
                "message": "the id you specified is not valid "
            }); 
        }
        office.viewOffice(parseInt(req.params.id).toString())
        .then(results => {
            if(results == "dont exist") {
                return res.status(403).json({
                    "status": 403,
                    "error":"offices you are requesting does not exist"
                });
            }else {
                const {id, officename, officeinfo,foundeon,officeadress,logourl} = results[0]
                return res.status(200).json({
                    "status": 200,
                     "data":{
                        id: id,
                        name: officename  || "",
                        hqaddress: officeadress || "",
                        logourl: logourl || "",
                        officeinfo: officeinfo || "",
                        foundeon: foundeon || ""
                    }
                }); 
            }
        })
    }

    getAllOffices(req, res) {
        office.viewAll()
        .then(results => {
            let displayInfo = []
            results.forEach(par => {
                const {id, officename, officeinfo,foundeon,officeaddress,logourl} = par
                displayInfo.push({
                        id: id,
                        name: officename  || "",
                        hqaddress: officeaddress || "",
                        logourl: logourl || "",
                        officeinfo: officeinfo || "",
                        foundeon: foundeon || ""
                })

            });

            return res.status(200).json({
                "status": 200,
               "data": displayInfo
            });
        
        })
    }

    editOffice(req,res) {
        
        if(!Number.isInteger(parseInt(req.params.id))) {
            return res.status(400).json({
                "status": 400,
                "message": "the id you specified is not valid "
            }); 
        }
        office.updateOffice(parseInt(req.params.id).toString(), req.body)
        .then(results => {
            if(results == "office dont exist") {
                return res.status(403).json({
                    "status": 403,
                    "error":"office you are updating does not exist "
                });
            } else {
                console.log(results)
                const {id, officename, officeinfo,foundeon,officeadress,logourl} = results[0]
                return res.status(201).json({
                    "status": 201,
                     "data":{
                         id: id,
                         name: officename  || "",
                         hqaddress: officeadress || "",
                         logourl: logourl || "",
                         officeinfo: officeinfo || "",
                         foundeon: foundeon || ""
                     }
                }); 
            }
        })
    }

    deleteOffice(req,res) {
        
        if(!Number.isInteger(parseInt(req.params.id))) {
            return res.status(400).json({
                "status": 400,
                "message": "the id you specified is not valid "
            }); 
        }
        office.deleteOffice(parseInt(req.params.id).toString())
        .then(results => {
            if(results == "office dont exist") {
                return res.status(403).json({
                    "status": 403,
                    "error":"office does not exists "
                });   
            } else {
                console.log('done')
                return res.status(200).json({
                    "status": 200,
                     "data":[{
                         "message": `deleted office ${results[0].officename} successfully`
                     }]
                }); 
            }
        })
        
    }

    createCandiadate(req, res) {
        
        if(!Number.isInteger(parseInt(req.params.id))) {
            return res.status(400).json({
                "status": 400,
                "message": "the id you specified is not valid "
            }); 
        }
        office.postCandidate(parseInt(req.params.id).toString(), req.body)
        .then(results => {
            if(typeof results == 'string') {
                return res.status(403).json({
                    "status": 403,
                    "error": results 
                });   
            }else {
                return res.status(200).json({
                    "status": 200,
                    "data": results
                });   
            }
        })
    }

    getAllCandidates(req,res) {
        office.allCandidate()
        .then(results => {
            return res.status(200).json({
                "status": 200,
                "data": results
            }); 
        })
    }

    createAvote(req, res) {
        let tokenId = token.decode(req.token).id
        console.log(tokenId)
        office.createVote(tokenId, req.body)
        .then(results => {
          if(typeof results == 'string') {
            return res.status(403).json({
                "status": 403,
                "data": results
            }); 
          } else {
            return res.status(200).json({
                "status": 200,
                "data": results
            }); 
          }
        })
    }

    createPetition(req,res) {
        office.createPetition(req.body) 
        .then(results => {
            console.log(results)
            if(typeof results == 'string') {
                return res.status(403).json({
                    "status": 403,
                    "data": results
                }); 
            }else {
                return res.status(200).json({
                    "status": 200,
                    "data": results
                }); 
            }
        })
    }

    viewResults(req,res) {

        if(!Number.isInteger(parseInt(req.params.id))) {
            return res.status(400).json({
                "status": 400,
                "message": "the id you specified is not valid "
            }); 
        }

        office.viewResults(parseInt(req.params.id).toString())
        .then(results => {
            if(typeof results == 'string') {
                return res.status(403).json({
                    "status": 403,
                    "data": results
                }); 

            } else if ( results.length == 0)  {
                return res.status(404).json({
                    "status": 404,
                    "data": "no votes yet on this office now"
                }); 
            }
            else {
                let {id, votefor, office} = results[0]
                let displayData = results.map(n =>  n.votefor)
                let distinguish = [...new Set(displayData)]
                let data = []
                let voto = results.map(n =>{return {votefor: n.votefor, office: n.office}})
                distinguish.forEach(n => {
                    let res = voto.filter(x => x.votefor == n)
                    data.push({...res[0], votecount: res.length})
                })

                return res.status(200).json({
                    "status": 200,
                    "data": data

                }); 
            }
        })
    }
}


export default new officeManagement()
