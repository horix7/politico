class User {
    constructor() {
        this.message;

        findId = (id) => {
            let foundId = userData.allUsers.find(userId => userId.id === id);
           let findIdB = foundId !== 'undefined'

           if(findIdB) {
               return foundId
           } else {
               return 'no'
           }
        };
        
        createUser = (newUser) => {
            let inputData;
            let ecnrypted = hashSync(newUser.password, 10)
            if (!userData.allUsers.find(userEmail => newUser.email === userEmail.email)) {
                inputData = {
                    "id": userData.allUsers.length + 1,
                    "token": tokens.encode({email:newUser.email, is_admin: false}),
                    "email": newUser.email,
                    "first_name": newUser.firstName,
                    "last_name": newUser.lastName,
                    "address": newUser.address,
                    "phoneNumber": newUser.phoneNumber,
                    "password": ecnrypted,
                    "is_admin": false
                }
                userData.token = tokens.encode({email:newUser.email, is_admin: false})
                userData.allUsers.push(inputData)
                return inputData
            }
            else {
                return 'invalid';
            }
        };

        login = (userInput) => {
            let resUser = userData.allUsers.find( user => user.email == userInput.email)

            if(resUser) {
                return resUser
            } else {
                return 'password does not match'
            }
        }
           

        findAllUsers = () => {
            return userData.allUsers;
        };
    }
}


