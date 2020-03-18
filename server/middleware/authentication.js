import tokenHelper from '../helpers/userTokens'


const authenticate = (req, res, next) => {

try {
  if(req.headers['authorization'] == undefined) {
    return res.status(401).json({
      status: 401,
      error: 'you are not signed in',
    });
  }
  else {
    const authHeaders = req.headers['authorization'];
    let data = tokenHelper.decode(authHeaders)
  }
  
} catch {
  return res.status(406).json({
    status: 406,
    error: 'you are providing an invalid token ',
  });

} finally {
      req.token = req.headers['authorization'];
      return next()  
}
 
  
};
export default authenticate;   


