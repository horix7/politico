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

    viewoffice(userInfo) {

    }

    editoffice() {

    }

    deletePartry() {
        
    }
}


export default new officeManagement()
