const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) { 
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData })}
  catch(error){
    res.status(400).send({ err: error.message})}
  }
//////////////////////////////////////////////////////////////////////////////////////////
const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      msg: "username or the password is not corerct",
    });
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Plutonium",
      organisation: "FunctionUp",
    },
    "THIS IS BHUT JYDA KHATARNAK TOKEN"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({token: token })}
  catch(error){
    res.status(500).send({ err: error.message})}
}
////////////////////////////////////////////////////////////////////////////////////////////

const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  res.status(200).send({data: [userDetails] })
}
catch(error){
  res.status(500).send({ err: error.message})}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateUser = async function (req, res) {
  try{
  
  let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(205).send({ status:true, data: updatedUser })
}
catch(error){
  res.status(400).send({ err: error.message})}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

 const deleteUser = async function (req,res) {
  try{
  let user =req.params.userId
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id:user}, userData);
  res.status(205).send({ status: true, data: updatedUser })}
  catch(error){
    res.status(400).send({ err: error.message})}
  }

module.exports={createUser,getUserData,updateUser,loginUser,deleteUser}