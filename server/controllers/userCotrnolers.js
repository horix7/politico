
import account from '../models/userAuth';
import tokens from '../helpers/userTokens'

/*

*/
class userController {
    
    userSignUp(req, res) {
        account.createUser(req.body)
        .then(results => {
         if (results == "email") {
            return res.status(409).json({
                "status": 409,
                "error":"email you provide is already in use "
            });
        }
        else { 
            let newUSerInfo = results   

            const {id,firstname , secondname, email, phone,userprofile,isadmin} =  newUSerInfo[0]
            return res.status(201).json({
                "status": 201,
                "data": [
                    
                   {
                        "token": tokens.encode({isadmin, firstname,id,email}),
                        "user": {
                            id: id,
                            firstname: firstname,
                            secondname: secondname,
                            email: email,
                            phoneNumber: phone,
                            passportUrl: userprofile || "",
                            isAdmin: false
                        }
                    }
                ]
               });
        }
    
    }
        )
        
        
    
    }

    userSignIn(req, res) {
       account.logiUser(req.body)
       .then(resi => {
        if(resi == "no") {
            return res.status(403).json({
                "status": 403,
                "error":"you are not registered in the system "
            });
        } else if (resi == "dont match") {
            return res.status(403).json({
                "status": 403,
                "error":"your password does not match your email"
            }); 
        }
        else {
            const {id,firstname , secondname, email, phone,userprofile,isadmin, password} =  resi[0]
            return res.status(200).json({
                "status": 200,
                "data": [
                    
                   {
                        "token": tokens.encode({id,email,isadmin}),
                        "user": {
                            id: id,
                            firstname: firstname,
                            secondname: secondname,
                            email: email,
                            phoneNumber: phone,
                            passportUrl: userprofile || "",
                            isAdmin: isadmin || false,
                            password: password
                        }
                    }
                ]
               });
        }
       })
    }
    getAllUsers(req, res) {
        account.allUsers(req.body)
        .then(results => {
            let displayResults = []
            results.forEach(n => {
                let {id,firstname,email,phone,userprofile,isAdmin} = n
                displayResults.push({id,firstname,email,phone,userprofile,isAdmin} )
            })
            return res.status(200).json({
                "status": 200,
                "data": displayResults
               });
        })
    
    }
    getOneUser(req, res) {
        if(parseInt(req.params.id).toString() == "NaN") {
            return res.status(400).json({
                "status": 400,
                "message": "the id you specified is not valid "
            }); 
        }
       account.oneUser(parseInt(req.params.id).toString())
       .then(results => {
           if(results == 'no') {
            return res.status(403).json({
                "status": 403,
                "error":"the user you are reffering does not exist"
            }); 
           } else {
            const {id,firstname , secondname, email, phone,userprofile,isadmin} =  results[0]
            return res.status(200).json({
                "status": 200,
                "data": {
                    id: id,
                    firstname: firstname,
                    secondname: secondname,
                    email: email,
                    phoneNumber: phone,
                    passportUrl: userprofile || "",
                    isAdmin: isadmin || false
                }
            }); 
           }
       })
    }
}

export default new userController()
