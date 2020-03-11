
import account from '../models/userAuth';

const userInfo = {
    
    userSignUp(req, res) {
        if (account.createUser(req.body) == 'invalid') {
            return res.status(403).json({
                "status": 403,
                "error":"youremail provide is already in use "
            });
        }
     if (req.body == {}) {
            return res.status(403).json({
                "status": 403,
                "error":"you provided invalid information"
            }); 
          
        } else { 
            let newUSerInfo = account.createUser(req.body)
            return res.status(201).json({
                "status": 201,
                "data": [
                   {
                        "token": newUSerInfo.token,
                        "user": {
                            id: newUSerInfo.id,
                            firstname: newUSerInfo.firstname,
                            secondname: newUSerInfo.secondname,
                            otherName: newUSerInfo.otherName,
                            email: newUSerInfo.email,
                            phoneNumber: newUSerInfo.phone,
                            passportUrl: newUSerInfo.userprofile,
                            isAdmin: newUSerInfo.isadmin
                        }
                    }
                ]
               });
        }
    },

    userSignIn(req, res) {
       
    },
    getAllUsers(req, res) {
      
    },
    getOneUser(req, res) {
       
    }
}

export default userInfo
