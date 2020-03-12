import jwtDecode from 'jwt-decode'
import tokenHelper from '../helpers/userTokens'


const authenticate = (req, res, next) => {
  if(req.headers['authorization'] == undefined) {
    return res.status(403).json({
      status: 'error',
      error: 'not logged in',
    });
  }
  const authHeaders = req.headers['authorization'].split(' ')[1];

  console.log(jwtDecode(authHeaders))
  if(authHeaders !== undefined) {
   req.token = authHeaders
    return next();
  } else {
    return res.status(403).json({
      status: 'error',
      error: 'not logged in',
    });
  }
};
export default authenticate;   


