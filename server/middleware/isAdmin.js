import token from '../helpers/userTokens'

const isAdmin = (req, res, next) => {

    try {
        let information = token.decode(req.token)
    } catch {
        return res.status(403).json({
            status: 403,
            error: 'please stoping faking the token',
          });
    }
   finally {
    let information = token.decode(req.token)
    if(information.isadmin == 'True') {
        return next()
    }else {
       return res.status(403).json({
           status: 403,
           error: 'not allowed to access this route',
         });
    }
   }


};
export default isAdmin;   


