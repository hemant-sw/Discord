const jwt = require('jsonwebtoken');



const config = process.env;

const verifyToken = (req,res, next) => {
    let token = req.body.token || req.query.token || req.headers['authorization'];

    if (!token) {
        return res.status(403).send('A token is required for authorization');

    }
    try{
        token = token.replace(/^Bearer\s+/, "");
        const decoded =  jwt.verify(token,config.TOKEN_KEY);
        req.user = decoded;

    } catch ( err) {
        return res.status(401).send('Inavlid Token');
    }

    return next();
};

module.exports = verifyToken
