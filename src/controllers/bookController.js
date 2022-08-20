const bookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")
const publishModel= require("../models/publishModel")



const createBook= async function (req, res) {
    let book = req.body
    let a=await AuthorModel.findById(book.authorid)
    let b = await publishModel.findById(book.publisherid)
     if (book.authorid==undefined){
     return res.send({msg:"author id is required"})
 }
    else if(a===null){
     res.send({msg:"author id is not valid " })
    }
    else if (book.publisherid==undefined){
        return res.send({msg:"publisher id is required"})
    }
        else if(b===null){
            res.send({msg:"publisher id is not valid" })
        }let createb = await bookModel.create(book)
        res.send({msg:createb})
}

const listOfAll= async function (req, res){
let wholeDetail= await bookModel.find().populate(["authorid","publisherid"])
    res.send({list:wholeDetail})
}

const getdata= async function (req, res) {
    let allBooks= await publishModel.find({name:{$in:["HarperCollins","Penguine"]}})
    let kitab = await bookModel.updateMany({publisherid:allBooks},{$set:{isHardCover:true}})
    let authorbooks= await AuthorModel.find({rating:{$gt:3.5}})
    let updateprice= await bookModel.updateMany({authorid:authorbooks},{$inc:{price:+10}})
    
    return res.send ({msg:[kitab,updateprice]})
}
module.exports={createBook, listOfAll,getdata}


// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
