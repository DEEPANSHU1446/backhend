const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) { 
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "THIS IS BHUT JYDA KHATARNAK TOKEN"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};
const getUserData = async function (req, res) {
  let token = req.headers["x-auth-token"]
  let decodedToken = jwt.verify(token, "THIS IS BHUT JYDA KHATARNAK TOKEN");
   if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: [userDetails,decodedToken] });
};

const updateUser = async function (req, res) {
  
  let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status:true, data: updatedUser });
};
 const deleteUser = async function (req,res) {
  let user =req.params.userId
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id:user}, userData);
  res.send({ status: true, data: updatedUser });



}

module.exports={createUser,getUserData,updateUser,loginUser,deleteUser} 

