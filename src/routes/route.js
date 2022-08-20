const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController= require("../controllers/publishcontroller")


router.post("/createAuthor", authorController.createAuthor  )
router.post("/createpublisher", publishController.createpublisher  )
router.post("/createBook", bookController.createBook  )
router.get("/listOfAll", bookController.listOfAll)
router.put("/getdata", bookController.getdata)



module.exports = router;