const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authormodel")


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor = async function (req, res) {
    let data= req.body
   let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const authorId = async function(req,res) {
let re= await AuthorModel.find({author_name:"Chetan Bhagat"}) 
let result1=await BookModel.find({author_id:re[0].author_id})
     res.send({msg:result1})
}
const bokauthor=async function(req,res) {
    let de= await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let result2=await AuthorModel.find({author_id:{$eq:de.author_id}})
    res.send({result2})
    }

    const money= async function (req,res){
        let data= await BookModel.find( { price : { $gte: 50, $lte: 100} } )
        let a=data.map(x=>x.author_id)
        let result= await AuthorModel.find({author_id:a}).select({author_name:1,_id:0})
        res.send({msg:result})
    }

// module.exports.createBook= createBook
// module.exports.createAuthor= createAuthor

module.exports={createBook,createAuthor,authorId,bokauthor,money}




