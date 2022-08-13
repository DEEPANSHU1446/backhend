const bookmodel= require("../models/bookmodel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookmodel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allUsers= await bookmodel.find()
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
