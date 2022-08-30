 const jwt = require("jsonwebtoken")
const authenticate = function (req,res, next) {
    try{
        let token = req.headers["x-auth-token"];
        if (!token) { return res.status(400).send({ msg: "token must be present" })}
        let decodedToken = jwt.verify(token, "THIS IS BHUT JYDA KHATARNAK TOKEN")
        if (!decodedToken) {
           return res.status(403).send({ error: "token is invalid" })
        } else {
            next()
        }
    }catch(error){res.status(500).send({err:error.message})}
}
const authorise = function (req, res, next) {
try{
    let token = req.headers["x-auth-token"]
    if (!token) { return res.status(400).send({ msg: "token must be present" })}
    let decodedToken = jwt.verify(token, "THIS IS BHUT JYDA KHATARNAK TOKEN")
    let abc = decodedToken.userId
    let xyz = req.params.userId
    if (abc != xyz) {
        res.status(403).send({ error: "user logged in is not allowed" })
    } else { next() }
}catch(error){res.status(501).send({err:error.message})}
}

module.exports={authenticate,authorise}