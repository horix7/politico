import decoder from 'jwt-decode'


const isAdmin = (req, res, next) => {
 let information = decoder(req.token)
 if(information.isadmin == 'true') {
     return next()
 }else {
     console.log(information)
    return res.status(403).json({
        status: 403,
        error: 'not allowed to access this route',
      });
 }
};
export default isAdmin;   


