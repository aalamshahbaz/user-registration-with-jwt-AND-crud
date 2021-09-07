
const jwt = require("jsonwebtoken") //importinh module



    checkToken=  (req, res,next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.slice(7);  //slice 7 mean after 6 letters i.e: bearer is 6 letter.
            jwt.verify(token, 'SECRET_KEY', (err, decoded) => {  // 'SECRETKEY' is used at login page for token genetaration
                if (err) {
                    res.json({code:401, success: 0, message: 'Invalid token' })
                } else {
                    next();
                }
            })
        } else {
            res.json({ success: 0, message: 'Acces denied! unauthorized user' })
        }


    }


    
module.exports=checkToken;