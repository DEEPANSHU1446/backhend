const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data = req.body
    let savedData= await BookModel.create(data)
     res.send({msg: savedData});
}
const bookList= async function (req, res) {
    let list= await BookModel.find().select( { bookName: 1, authorName: 1, _id: 0})
    res.send({msg: list});
}
const BooksInYear= async function (req, res) {
    let years= req.body.year
    let yearData= await BookModel.find({year:years})
    res.send({msg: yearData});
}
const ParticularBooks= async function (req, res) {
    let dataa= req.body
    // let dep=Object.keys(dataa)
    // let far=Object.values(dataa)
    // let d = dep[0]
    // let f = far[0]
    // let yearData= await BookModel.find({d:f})
    let yearData= await BookModel.find(dataa)
    res.send({msg: yearData})
}
    const getXINRBooks= async function (req, res) {
        let result= await BookModel.find({"price.indianPrice":{$in:["100INR","200INR","500INR"]}})
        res.send({msg: result})
    }
    const getRandomBooks= async function (req, res) {
        let result2= await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
        res.send({msg: result2})
    }

module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.BooksInYear=BooksInYear
module.exports.ParticularBooks=ParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks = getRandomBooks
