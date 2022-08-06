const express = require('express');
const newi = require('../logger/logger')
const new2 = require('../util/helper')
const new3 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    newi.welcome()
    new2.prdate()
    new2.prmonth()
    new2.prinform()
    new3.trims()
    new3.uppr()
    new3.lowr()
    res.send('My last function also running')
});
router.get('/test-intro', function (req, res) {
    
});
router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})
router.get('/give-me-students-data',function(req, res){
})
module.exports = router;
// adding this comment for no reason