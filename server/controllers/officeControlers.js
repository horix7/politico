import office from '../models/officeManagement'
import token from '../helpers/userTokens'

class officeManagement {
    createOffice(req, res) {
        let userData = token.decode(req.token)
        office.createOffice(req.body)
        .then(results => {
            if(results == "office exists") {
                return res.status(403).json({
                    "status": 403,
                    "error":"office you are creating already exist "
                });
            } else {
                console.log(results)
                const {id, officename, officeinfo,foundeon,officeaddress,logourl} = results[0]
                return res.status(201).json({
                    "status": 201,
                     "data":{
                         id: id,
                         name: officename  || "",
                         hqaddress: officeaddress || "",
                         logourl: logourl || "",
                         officeinfo: officeinfo || "",
                         foundeon: foundeon || ""
                     }
                }); 
            }
        }) 
    }

    viewOffice(req, res) {
        office.viewOffice(req.params.id)
        .then(results => {
            if(results == "dont exist") {
                return res.status(403).json({
                    "status": 403,
                    "error":"offices you are requesting does not exist exist "
                });
            }else {
                const {id, officename, officeinfo,foundeon,officeaddress,logourl} = results[0]
                return res.status(200).json({
                    "status": 200,
                     "data":{
                        id: id,
                        name: officename  || "",
                        hqaddress: officeaddress || "",
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

    editoffice() {

    }

    deletePartry() {
        
    }
}


export default new officeManagement()
