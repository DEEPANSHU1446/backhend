const jwt = require("jsonwebtoken");
const mid = function (req,res,next){
 let token = req.headers["x-auth-token"];
  if (!token) {return res.send({ status: false, msg: "token must be present" })
} 
let decodedtoken= jwt.verify(token,"THIS IS BHUT JYDA KHATARNAK TOKEN")
let loginuser = req.params.userId
let decodeduser = decodedtoken.userId
if (decodeduser!=loginuser){
  res.send({msg: "User logged in not allowed" })
}
else{ next()}
}

module.exports={mid}