
const checkToken = (req,res,next) => {
    const bearerHeader = req.token; 

    let bearerToken = bearerHeader.split(' ');
    
        if (typeof bearerHeader !== 'undefined') {
            token = bearerToken[1] 
            req.token = token
            next();
        }else {
                return res.status(401).json({
                    "status":"error",
                    "error":"you are not signed in "
                });
            }  
}

export default checkToken;

