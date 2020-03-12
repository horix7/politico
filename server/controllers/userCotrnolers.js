
import account from '../models/userAuth';
import tokens from '../helpers/userTokens'

/*

*/
class userController {
    
    userSignUp(req, res) {
        account.createUser(req.body)
        .then(results => {
        if (results == "true") {
            return res.status(403).json({
                "status": 403,
                "error":"email you provide the your information"
            });
        }
        else if (results == "email") {
            return res.status(403).json({
                "status": 403,
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
      
    }
    getOneUser(req, res) {
       
    }
}

export default new userController()
