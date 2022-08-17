const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createBook", BookController.createBook)
router.get("/bookList", BookController.bookList)
router.post("/BooksInYear", BookController.BooksInYear)
router.post("/ParticularBooks", BookController.ParticularBooks)
router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)


module.exports = router;