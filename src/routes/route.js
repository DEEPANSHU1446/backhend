const express = require('express');
const router = express.Router();
// const CowinController= require("../controllers/cowinController")
const handler1= require("../controllers/cowinAssgnmt")
const handler2= require("../controllers/tempCities")
const handler3= require("../controllers/MemesAssgnmt")



router.get("/list",handler1.getList)
//////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/london",handler2.londonList)
router.get("/londontemp",handler2.londonTemp)
router.get("/alltemp",handler2.allTemp)
//////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/data",handler3.memeData)
router.post("/memedata",handler3.createMeme)
































// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)
// router.post("/cowin/getOtp", CowinController.getOtp)


module.exports = router;