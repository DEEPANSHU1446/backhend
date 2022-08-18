const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
// const {createBook,createAuthor}= require("../controllers/bookController")


// const BookController= require("../models/bookModel")

// router.post("/createBook",createBook)`

// router.post("/createBook",createAuthor)`

router.post("/createBook", BookController.createBook  )

router.post("/createAuthor", BookController.createAuthor )
router.get("/authorId",BookController.authorId)
router.get("/bokauthor",BookController.bokauthor)
router.get("/money",BookController.money)




module.exports = router;



//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    // const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    // const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    // let x= dateB.diff(dateA, "days")
    // console.log(x)

    // res.send({ msg: "all good"})


